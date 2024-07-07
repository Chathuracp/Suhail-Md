const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_11_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MixcbiAgICAgICAgOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2LFxuICAgICAgICA4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICA3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk83VkNYZnBHaFNETld0Z1ZJckl0bmFYOHpHS3VlOU5QcVV2a201K0NyZzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJ2Q2p5Ym5mUXcyMl9fejBTeHQwSmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGQ5MmFkMDctMDcwYy00NjlmLTk2ZjgtMGQ5ZjAwYjIxMzE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMTc3LFxuICAgICAgMTIyLFxuICAgICAgMjI2LFxuICAgICAgMixcbiAgICAgIDE5NixcbiAgICAgIDE2OSxcbiAgICAgIDQxLFxuICAgICAgMTYzLFxuICAgICAgMTYyLFxuICAgICAgMTg0LFxuICAgICAgMTU1LFxuICAgICAgNTAsXG4gICAgICA0MCxcbiAgICAgIDE2NyxcbiAgICAgIDIwMyxcbiAgICAgIDE4NixcbiAgICAgIDEzNSxcbiAgICAgIDE1MixcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgNTIsXG4gICAgICAzNCxcbiAgICAgIDE3NCxcbiAgICAgIDM5LFxuICAgICAgNDgsXG4gICAgICAxNixcbiAgICAgIDU5LFxuICAgICAgMTQ0LFxuICAgICAgNyxcbiAgICAgIDEyOCxcbiAgICAgIDI0NSxcbiAgICAgIDExNCxcbiAgICAgIDE2LFxuICAgICAgMzQsXG4gICAgICAxMjMsXG4gICAgICAyMDEsXG4gICAgICAyMzIsXG4gICAgICA5OCxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIySkpWVlE5R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjU2MDA0OTU6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLhtL/htLHhtKzhtLjjhbnvvKjvvKHvvK/vvLhcIixcbiAgICBcImxpZFwiOiBcIjE4NjU1NjYxODkyMDA4ODoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOU2o4NW9IRUt6OHFyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlF6ZHBNUGxDV091YS9YM0hBUTJNZW9pKzhzT0ZPSHpMOEtaUDJ4NGdvek09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTWpQWHVZcnRJdWQwQXROMTlFQVdWZlJFYW9uWGowMXFvYU5IKzBuZHdLdEJ6QzlRMkRWdnJFRzVMcU1EUVQwTFVmTG9hY04zYWJpQkNOcXY4ajg4Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMElQQ05NS1liMGcvUGFTYnAwa2hZQ0ZyTzBEekpYa3puMUh0UHZma1psekJrbnVqaHJlUzJjYmcvQjBWTk4vdmxXZ1FURnlmTWZYakdvRTRFVWkzZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjU2MDA0OTU6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM2ODY5OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝐂𝐇𝐀𝐓𝐇𝐔𝐑𝐀 (𝐂𝐏)",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
