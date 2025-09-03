const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (option) => {
  //   console.log("hello my name is osman goni ", option);
  bot.sendMessage(option.chat.id, "hello everyone i am osman goni rabbi ");
});
