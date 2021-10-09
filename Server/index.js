import express from 'express'
import colors from 'colors'
const app = express();
const port = 3001;
import cors from 'cors'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import fetch from 'node-fetch'
const apiKey = "851fd942-0322-477f-9eb1-3867a77868bd"

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
    .then(res => res.json())
    .then(json => {
      res.json({
        status: "success",
        uuid: json.id
      })
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

setInterval(() => {
  fetch(`https://api.hypixel.net/counts?key=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    fs.writeFile(`./data/gameHistory/gameHistory_${Math.floor(+new Date() / 1000)}.json`, JSON.stringify(data, null, 2) , (err) => {
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

//#endregion
app.listen(port, () => console.log(`HyTools Server listening on port ${port}!`))