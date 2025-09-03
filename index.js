const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const axios = require("axios");

bot.onText(/\/joke/, async (option) => {
  const response = await axios.get(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const setup = response.data.setup;
  const punchline = response.data.punchline;
  bot.sendMessage(option.chat.id, setup + " , " + punchline);
});
