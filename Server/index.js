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
import apiRoutes from "./api.js"
import bedwarsEmbeds from "./embeds/bedwars.js"


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


bedwarsEmbeds(app)
apiRoutes(app)

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