const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=Pv4HXCbA#JOgCc0OInKhF_TxdEIhMa0BbBjmTCqwWk2q4qcCO1Zk",
MONGODB: process.env.MONGODB || "mongodb+srv://tharux:tharux@cluster0.xxrdh.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
