const TELEGRAM_API = "https://api.telegram.org";

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return response.status(500).json({ error: "Telegram is not configured." });
  }

  const { name, email, message } = request.body || {};
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return response.status(400).json({ error: "Name, email, and message are required." });
  }

  const text = [
    "New portfolio message",
    "",
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    "",
    message.trim(),
  ].join("\n");

  try {
    const telegramResponse = await fetch(
      `${TELEGRAM_API}/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );

    if (!telegramResponse.ok) {
      const telegramResult = await telegramResponse.json();
      return response.status(502).json({
        error: "Telegram rejected the message.",
        details:
          typeof telegramResult.description === "string"
            ? telegramResult.description
            : "Telegram returned an unspecified error.",
      });
    }

    return response.status(200).json({ success: true });
  } catch (error) {
    return response.status(502).json({ error: "Unable to reach Telegram." });
  }
};
