import express from 'express'
import colors from 'colors'
const app = express();
const port = 3001;
import cors from 'cors'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import fetch from 'node-fetch'
import { argv } from 'process';
const apiKey = "851fd942-0322-477f-9eb1-3867a77868bd"
import Canvas from 'canvas'

app.use((req, res, next) => {
  switch (req.method) {
    case 'GET':
      console.log(`${req.method}`.green.bold + ` "${req.path}"`.bold)
      next()
      break;
    // case 'POST':
    //   console.log(`${req.method}`.blue.bold + ` "${req.path}"`.bold)
    //   next()
    //   break;
    default:
      console.log(` ERROR `.white.bold.bgRed + ` ${req.method} `.brightRed.bold.bgWhite + ` ${req.path} `.white.bold.bgBlack)
      res.json({
        status: "error",
        message: "Unknown Endpoint"
      })
      break;
  }
})

app.use(cors())
app.use(cookieParser());

app.use(express.json());

//#region Skyblock Apis

/*
 
Skyblock APIS
 
https://api.hypixel.net/resources/skyblock/skills?key=${apiKey}
https://api.hypixel.net/resources/skyblock/collections?key=${apiKey}
https://api.hypixel.net/resources/skyblock/items?key=${apiKey}
https://api.hypixel.net/skyblock/news?key=${apiKey}
https://api.hypixel.net/skyblock/auction?key=${apiKey}&player=Idiot_dev
https://api.hypixel.net/skyblock/auctions?key=${apiKey}&page=${page}
https://api.hypixel.net/skyblock/auctions_ended?key=${apiKey}
https://api.hypixel.net/skyblock/bazaar?key=${apiKey}
https://api.hypixel.net/skyblock/profile?key=${apiKey}&profile=idk
https://api.hypixel.net/skyblock/profiles?key=${apiKey}&uuid=idk
 
*/

// #endregion

//#region General Apis

/*
 
General Apis
 
https://api.hypixel.net/player?uuid=${uuid}&key=${apiKey}
https://api.hypixel.net/friends?uuid=${uuid}&key=${apiKey}
https://api.hypixel.net/recentgames?uuid=${uuid}&key=${apiKey}
https://api.hypixel.net/status?uuid=${uuid}&key=${apiKey}
https://api.hypixel.net/guild?uuid=${uuid}&key=${apiKey}
https://api.hypixel.net/player/ranked/skywars?uuid=${uuid}&key=${apiKey}
https://api.hypixel.net/resources/games?key=${apiKey}
https://api.hypixel.net/resources/achievements?key=${apiKey}
https://api.hypixel.net/resources/challenges?key=${apiKey}
https://api.hypixel.net/resources/quests?key=${apiKey}
https://api.hypixel.net/resources/guilds/achievements?key=${apiKey}
https://api.hypixel.net/resources/guilds/permissions?key=${apiKey}
https://api.hypixel.net/boosters?key=${apiKey}
https://api.hypixel.net/counts?key=${apiKey}
https://api.hypixel.net/leaderboards?key=${apiKey}
https://api.hypixel.net/punishmentstats?key=${apiKey}
 
*/

//#endregion

app.get(`/status`, (req, res) => {
  res.json({
    status: "success",
    message: "Server is up and running"
  })
})

app.get(`/uuid`, (req, res) => {
  fetch(`https://api.mojang.com/users/profiles/minecraft/${req.query.username}`)
    .then(res => {
      if (res.status === 204) {
        return "error"
      } else {
        return res.json()
      }
    })
    .then(json => {
      if (json === "error") {
        res.json({
          status: "error",
          message: "Player not found"
        })
      } else {
        res.json({
          status: "success",
          uuid: json.id
        })
      }
    })
})

//#region GeneralApi

app.get(`/player`, (req, res) => {
  fetch(`https://api.hypixel.net/player?uuid=${req.query.uuid}&key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/player/friends`, (req, res) => {
  fetch(`https://api.hypixel.net/friends?uuid=${req.query.uuid}&key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/player/recentgames`, (req, res) => {
  fetch(`https://api.hypixel.net/recentgames?uuid=${req.query.uuid}&key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/player/status`, (req, res) => {
  fetch(`https://api.hypixel.net/status?uuid=${req.query.uuid}&key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/guild`, (req, res) => {
  fetch(`https://api.hypixel.net/guild?uuid=${req.query.uuid}&key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/player/ranked/skywars`, (req, res) => {
  fetch(`https://api.hypixel.net/player/ranked/skywars?uuid=${req.query.uuid}&key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/games`, (req, res) => {
  fetch(`https://api.hypixel.net/resources/games?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/achievements`, (req, res) => {
  fetch(`https://api.hypixel.net/resources/achievements?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/challenges`, (req, res) => {
  fetch(`https://api.hypixel.net/resources/challenges?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/quests`, (req, res) => {
  fetch(`https://api.hypixel.net/resources/quests?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/guild/achievements`, (req, res) => {
  fetch(`https://api.hypixel.net/resources/guilds/achievements?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/guild/permissions`, (req, res) => {
  fetch(`https://api.hypixel.net/resources/guilds/permissions?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/boosters`, (req, res) => {
  fetch(`https://api.hypixel.net/boosters?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/counts`, (req, res) => {
  fetch(`https://api.hypixel.net/counts?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/leaderboards`, (req, res) => {
  fetch(`https://api.hypixel.net/leaderboards?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/punishmentstats`, (req, res) => {
  fetch(`https://api.hypixel.net/punishmentstats?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})

//#endregion

//#region SkyblockApi

app.get(`/skyblock/skills`, (req, res) => {
  fetch(`https://api.hypixel.net/resources/skyblock/skills?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/skyblock/collections`, (req, res) => {
  fetch(`https://api.hypixel.net/resources/skyblock/collections?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/skyblock/items`, (req, res) => {
  fetch(`https://api.hypixel.net/resources/skyblock/items?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/skyblock/news`, (req, res) => {
  fetch(`https://api.hypixel.net/skyblock/news?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/skyblock/player/auctions`, (req, res) => {
  fetch(`https://api.hypixel.net/skyblock/auction?key=${apiKey}&player=${req.query.player}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/skyblock/auctions`, (req, res) => {
  fetch(`https://api.hypixel.net/skyblock/auctions?key=${apiKey}&page=${req.query.page}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/skyblock/auctions_ended`, (req, res) => {
  fetch(`https://api.hypixel.net/skyblock/auctions_ended?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/skyblock/bazaar`, (req, res) => {
  fetch(`https://api.hypixel.net/skyblock/bazaar?key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/skyblock/profile`, (req, res) => {
  fetch(`https://api.hypixel.net/skyblock/profile?key=${apiKey}&profile=${req.query.profileid}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})
app.get(`/skyblock/player/profiles`, (req, res) => {
  fetch(`https://api.hypixel.net/skyblock/profiles?key=${apiKey}&uuid=${req.query.uuid}`)
    .then(res => res.json())
    .then(data => {
      res.json(data)
    })
})

//#endregion


//#region EmbedApi

var mcColors = {
  dark_red: "#AA0000",
  red: "#FF5555",
  gold: "#FFAA00",
  yellow: "#FFFF55",
  dark_green: "#00AA00",
  green: "#55FF55",
  aqua: "#55FFFF",
  dark_aqua: "#00AAAA",
  dark_blue: "#0000AA",
  blue: "#5555FF",
  light_purple: "#FF55FF",
  dark_purple: "#AA00AA",
  white: "#FFFFFF",
  gray: "#AAAAAA",
  dark_gray: "#555555",
  black: "#000000",
}

function prestigeGradient(ctx, prestige, x, y) {
  switch (true) {
    case prestige > 3000:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, mcColors.white);
      gradient.addColorStop(1, mcColors.black);
      ctx.fillStyle = gradient
      break
    case prestige > 2900:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, mcColors.white);
      gradient.addColorStop(0.1666666666666667, mcColors.white);
      gradient.addColorStop(0.3333333333333334, mcColors.yellow);
      gradient.addColorStop(0.5, mcColors.yellow);
      gradient.addColorStop(0.6666666666666667, mcColors.gold);
      gradient.addColorStop(0.8333333333333333, mcColors.gold);
      gradient.addColorStop(1, mcColors.gold);
      ctx.fillStyle = gradient
      break
    case prestige > 2800:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, mcColors.white);
      gradient.addColorStop(0.1666666666666667, mcColors.white);
      gradient.addColorStop(0.3333333333333334, mcColors.yellow);
      gradient.addColorStop(0.5, mcColors.yellow);
      gradient.addColorStop(0.6666666666666667, mcColors.gold);
      gradient.addColorStop(0.8333333333333333, mcColors.gold);
      gradient.addColorStop(1, mcColors.gold);
      ctx.fillStyle = gradient
      break;
    case prestige > 2700:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, mcColors.white);
      gradient.addColorStop(0.1666666666666667, mcColors.white);
      gradient.addColorStop(0.3333333333333334, mcColors.yellow);
      gradient.addColorStop(0.5, mcColors.yellow);
      gradient.addColorStop(0.6666666666666667, mcColors.gold);
      gradient.addColorStop(0.8333333333333333, mcColors.gold);
      gradient.addColorStop(1, mcColors.gold);
      ctx.fillStyle = gradient
      break
    case prestige > 2600:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, mcColors.white);
      gradient.addColorStop(0.1666666666666667, mcColors.white);
      gradient.addColorStop(0.3333333333333334, mcColors.yellow);
      gradient.addColorStop(0.5, mcColors.yellow);
      gradient.addColorStop(0.6666666666666667, mcColors.gold);
      gradient.addColorStop(0.8333333333333333, mcColors.gold);
      gradient.addColorStop(1, mcColors.gold);
      ctx.fillStyle = gradient
      break
    case prestige > 2500:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, mcColors.white);
      gradient.addColorStop(0.1666666666666667, mcColors.white);
      gradient.addColorStop(0.3333333333333334, mcColors.yellow);
      gradient.addColorStop(0.5, mcColors.yellow);
      gradient.addColorStop(0.6666666666666667, mcColors.gold);
      gradient.addColorStop(0.8333333333333333, mcColors.gold);
      gradient.addColorStop(1, mcColors.gold);
      ctx.fillStyle = gradient
      break
    case prestige > 2400:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, mcColors.white);
      gradient.addColorStop(0.1666666666666667, mcColors.white);
      gradient.addColorStop(0.3333333333333334, mcColors.yellow);
      gradient.addColorStop(0.5, mcColors.yellow);
      gradient.addColorStop(0.6666666666666667, mcColors.gold);
      gradient.addColorStop(0.8333333333333333, mcColors.gold);
      gradient.addColorStop(1, mcColors.gold);
      ctx.fillStyle = gradient
      break
    case prestige > 2300:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, mcColors.dark_purple);
      gradient.addColorStop(0.1666666666666667, mcColors.dark_purple);
      gradient.addColorStop(0.3333333333333334, mcColors.light_purple);
      gradient.addColorStop(0.5, mcColors.light_purple);
      gradient.addColorStop(0.6666666666666667, mcColors.gold);
      gradient.addColorStop(0.8333333333333333, mcColors.yellow);
      gradient.addColorStop(1, mcColors.yellow);
      ctx.fillStyle = gradient
      break
    case prestige > 2200:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, mcColors.gold);
      gradient.addColorStop(0.1666666666666667, mcColors.gold);
      gradient.addColorStop(0.3333333333333334, mcColors.white);
      gradient.addColorStop(0.5, mcColors.white);
      gradient.addColorStop(0.6666666666666667, mcColors.aqua);
      gradient.addColorStop(0.8333333333333333, mcColors.aqua);
      gradient.addColorStop(1, mcColors.aqua);
      ctx.fillStyle = gradient
      break
    case prestige > 2100:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, mcColors.white);
      gradient.addColorStop(0.1666666666666667, mcColors.white);
      gradient.addColorStop(0.3333333333333334, mcColors.yellow);
      gradient.addColorStop(0.5, mcColors.yellow);
      gradient.addColorStop(0.6666666666666667, mcColors.gold);
      gradient.addColorStop(0.8333333333333333, mcColors.gold);
      gradient.addColorStop(1, mcColors.gold);
      ctx.fillStyle = gradient
      break
    case prestige > 2000:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0, mcColors.dark_gray);
      gradient.addColorStop(0.1666666666666667, mcColors.gray);
      gradient.addColorStop(0.3333333333333334, mcColors.white);
      gradient.addColorStop(0.5, mcColors.white);
      gradient.addColorStop(0.6666666666666667, mcColors.gray);
      gradient.addColorStop(0.8333333333333333, mcColors.gray);
      gradient.addColorStop(1, mcColors.dark_gray);
      ctx.fillStyle = gradient
      break
    case prestige > 1900:
      ctx.fillStyle = mcColors.dark_purple
      break
    case prestige > 1800:
      ctx.fillStyle = mcColors.blue
      break
    case prestige > 1700:
      ctx.fillStyle = mcColors.light_purple
      break
    case prestige > 1600:
      ctx.fillStyle = mcColors.dark_red
      break
    case prestige > 1500:
      ctx.fillStyle = mcColors.aqua
      break
    case prestige > 1400:
      ctx.fillStyle = mcColors.dark_green
      break
    case prestige > 1300:
      ctx.fillStyle = mcColors.aqua
      break
    case prestige > 1200:
      ctx.fillStyle = mcColors.gold
      break
    case prestige > 1100:
      ctx.fillStyle = mcColors.white
      break
    case prestige > 1000:
      var gradient = ctx.createLinearGradient(0, 0, x, y);
      gradient.addColorStop(0.1666666666666667, mcColors.gold);
      gradient.addColorStop(0.3333333333333334, mcColors.yellow);
      gradient.addColorStop(0.5, mcColors.green);
      gradient.addColorStop(0.6666666666666667, mcColors.aqua);
      gradient.addColorStop(0.8333333333333333, mcColors.light_purple);
      gradient.addColorStop(1, mcColors.dark_purple);
      ctx.fillStyle = gradient
      break
    case prestige > 900:
      ctx.fillStyle = mcColors.dark_purple
      break
    case prestige > 800:
      ctx.fillStyle = mcColors.blue
      break
    case prestige > 700:
      ctx.fillStyle = mcColors.light_purple
      break
    case prestige > 600:
      ctx.fillStyle = mcColors.dark_red
      break
    case prestige > 500:
      ctx.fillStyle = mcColors.dark_aqua
      break
    case prestige > 400:
      ctx.fillStyle = mcColors.dark_green
      break
    case prestige > 300:
      ctx.fillStyle = mcColors.aqua
      break
    case prestige > 200:
      ctx.fillStyle = mcColors.gold
      break
    case prestige > 100:
      ctx.fillStyle = mcColors.white
      break
    case prestige > 0:
      ctx.fillStyle = mcColors.gray
      break
  }
}

function HandleRanks(ctx, prestige, playerRank, username) {
  var x = 25
  var y = 50
  ctx.fillStyle = "#ffffff"
  var prestigeText = `[${prestige}⭐]`
  prestigeGradient(ctx, prestige, ctx.measureText(prestigeText).width, ctx.measureText(prestigeText).height)
  ctx.fillText(prestigeText, ctx.measureText(playerRank.rank).width + 25, 50);

  switch (playerRank.rank) {
    case "[ADMIN]":
      ctx.fillStyle = mcColors.red
      ctx.fillText(`[ADMIN]`, 25, 50);
      break;
    case "":
      break
    case "[VIP]":
      ctx.fillStyle = mcColors.green
      ctx.fillText(`[VIP]`, 25, 50);
      break
    case "[VIP+]":
      ctx.fillStyle = mcColors.green
      ctx.fillText(`[VIP`, 25, 50);
      ctx.fillStyle = mcColors.yellow
      ctx.fillText(`+`, ctx.measureText(`[VIP`).width + 25, 50);
      ctx.fillStyle = mcColors.green
      ctx.fillText(`]`, ctx.measureText(`[VIP+`).width + 25, 50);
      break
    case "[MVP]":
      ctx.fillStyle = mcColors.aqua
      ctx.fillText(`[MVP]`, 25, 50);
      break
    case "[MVP+]":
      ctx.fillStyle = mcColors.aqua
      ctx.fillText(`[MVP`, 25, 50);
      ctx.fillStyle = mcColors[ playerRank.plusColor ]
      ctx.fillText(`+`, ctx.measureText(`[MVP`).width + 25, 50);
      ctx.fillStyle = mcColors.aqua
      ctx.fillText(`]`, ctx.measureText(`[MVP+`).width + 25, 50);
      break
    default:
      var gradient = ctx.createLinearGradient(0, 0, ctx.measureText(playerRank.rank).width, ctx.measureText(playerRank.rank).height);
      gradient.addColorStop(0, mcColors.red);
      gradient.addColorStop(0.1666666666666667, mcColors.gold);
      gradient.addColorStop(0.3333333333333334, mcColors.yellow);
      gradient.addColorStop(0.5, mcColors.green);
      gradient.addColorStop(0.6666666666666667, mcColors.aqua);
      gradient.addColorStop(0.8333333333333333, mcColors.light_purple);
      gradient.addColorStop(1, mcColors.dark_purple);
      ctx.fillStyle = gradient
      ctx.fillText(playerRank.rank, 25, 50);
      break
  }
  // ctx.fillText(`${username}`, 25, 50);
}



app.get(`/embed/bedwars/:playerName`, async (req, res) => {
  var username = req.params.playerName
  var playerRank = { rank: "[MVP+]", plusColor: "green" }
  var prestige = 1000
  // var background = await Canvas.loadImage('./wallpaper.jpg');
  var canvas = Canvas.createCanvas(700, 250);
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "#00000000"
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill()

  roundRect(ctx, 0, 0, 700, 250, 10, true, false)
  ctx.fillStyle = "#363d4d"
  roundRect(ctx, 5, 5, 690, 240, 10, true, false)
  ctx.font = "32px Arial";
  HandleRanks(ctx, prestige, playerRank, username)
  ctx.fillStyle = "#ffffff"
  ctx.font = "32px Arial";
  ctx.fillText(`'s Bedwars Stats`, 300, 50)
  const buffer = canvas.toBuffer('image/png')
  res.contentType('image/png')
  res.send(buffer)
})

/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} [radius = 5] The corner radius; It can also be an object 
 *                 to specify different radii for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke === 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
    for (var side in defaultRadius) {
      radius[ side ] = radius[ side ] || defaultRadius[ side ];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}

app.get(`/embed/bedwars`, (req, res) => {
  var canvas = Canvas.createCanvas(700, 250);
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = '#363d4d';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff"
  ctx.font = "32px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`Unknown Player`, canvas.width / 2, canvas.height / 2);
  const buffer = canvas.toBuffer('image/png')
  res.contentType('image/png')
  res.send(buffer)
})

//#endregion


//#region HistoricalApi
app.get(`/historical/gamehistory/get`, (req, res) => {
  fs.readFile(`./data/gameHistory/gameHistory_${req.query.epoch}.json`, (err, data) => {
    if (err) {
      res.json({
        error: "no data found for current epoch (" + req.query.epoch + ")"
      })
    } else {
      res.json(JSON.parse(data))
    }
  })
})
app.get(`/historical/gamehistory/list`, (req, res) => {
  fs.readdir(`./data/gameHistory/`, (err, data) => {
    if (err) {
      res.json({
        error: err
      })
    } else {
      res.json(data.map(filename => {
        return filename.replace(/gameHistory_/, '').replace(/\.json/, '')
      }))
    }
  })
})

if (argv[ 2 ] !== "dev") {
  setInterval(() => {
    fetch(`https://api.hypixel.net/counts?key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        fs.writeFile(`./data/gameHistory/gameHistory_${Math.floor(+new Date() / 1000)}.json`, JSON.stringify(data, null, 2), (err) => {
          if (err) throw err
        })
      })
    fetch(`https://api.hypixel.net/skyblock/bazaar?key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        fs.writeFile(`./data/bazaarHistory/bazaarHistory_${Math.floor(+new Date() / 1000)}.json`, JSON.stringify(data, null, 2), (err) => {
          if (err) throw err
        })
      })
  }, 10000)
}
//#endregion

//#region Failed Proxy
// var mostRecentProxyHost = "https://google.com"

// app.get(`/prox/google`, (req, res) => {
//   mostRecentProxyHost = "https://google.com"
//   fetch(`https://google.com`)
//     .then(res => res.text())
//     .then(data => {
//       res.send(data)
//     })
// })

// app.get(`/prox/sbmoney`, (req, res) => {
//   mostRecentProxyHost = "https://skyblock-money-dev.ewsgit.repl.co"
//   fetch(`http://skyblock-money-dev.ewsgit.repl.co`)
//     .then(res => res.text())
//     .then(data => {
//       res.send(data)
//     })
// })

// app.use((req, res, next) => {
//   if (req.url.startsWith("https://") || req.url.startsWith("http://")) {
//     switch (req.method) {
//       case "GET":
//         fetch(req.url)
//           .then(res => res.text())
//           .then(data => {
//             res.send(data)
//           })
//         break
//       case "POST":
//         fetch(req.url, {
//           method: "POST",
//           body: req.body
//         })
//           .then(res => res.text())
//           .then(data => {
//             res.send(data)
//           })
//         break
//       default:
//         res.send("Method not supported")
//     }
//   } else {
//     switch (req.method) {
//       case "GET":
//         fetch(mostRecentProxyHost + req.url)
//           .then(res => res.text())
//           .then(data => {
//             if (req.url.endsWith(".js")) {
//               res.setHeader("Content-Type", "application/javascript")
//             }
//             if (req.url.endsWith(".png")) {
//               res.setHeader("Content-Type", "image/png")
//             }
//             res.send(data)
//           })
//         break
//       case "POST":
//         fetch(mostRecentProxyHost + req.url, {
//           method: "POST",
//           body: req.body
//         })
//           .then(res => res.text())
//           .then(data => {
//             res.send(data)
//           })
//         break
//       default:
//         res.send("Method not supported")
//     }
//   }
//   console.log("Host: " + mostRecentProxyHost + req.url)
// })
//#endregion

//#region Marketplace

app.get(`/marketplace/get`, (req, res) => {
  fs.readFile(`./data/marketplace.json`, (err, data) => {
    if (err) {
      res.json({
        error: err
      })
    } else {
      res.json(JSON.parse(data))
    }
  })
})

app.post(`/marketplace/add`, (req, res) => {
  fs.readFile(`./data/marketplace.json`, (err, data) => {
    if (err) {
      res.json({
        error: err
      })
    } else {
      let marketplace = JSON.parse(data)
      marketplace.push(req.body)
      fs.writeFile(`./data/marketplace.json`, JSON.stringify(marketplace, null, 2), (err) => {
        if (err) throw err
      })
      res.json({
        success: true
      })
    }
  })
})

//#endregion

app.listen(port, () => console.log(`HyTools Server listening on port ${port}!`))