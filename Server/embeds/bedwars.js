import cors from 'cors'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import fetch from 'node-fetch'
import { argv } from 'process';
const apiKey = "851fd942-0322-477f-9eb1-3867a77868bd"
import Canvas from 'canvas'

export default function (app) {

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
			case prestige > 3999:
				var gradient = ctx.createLinearGradient(0, 0, x, y);
				gradient.addColorStop(0, mcColors.white);
				gradient.addColorStop(1, mcColors.black);
				ctx.fillStyle = gradient
				break
			case prestige > 2899:
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
			case prestige > 2799:
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
			case prestige > 2699:
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
			case prestige > 2599:
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
			case prestige > 2499:
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
			case prestige > 2399:
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
			case prestige > 2299:
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
			case prestige > 2199:
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
			case prestige > 2099:
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
			case prestige > 1999:
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
			case prestige > 1899:
				ctx.fillStyle = mcColors.dark_purple
				break
			case prestige > 1799:
				ctx.fillStyle = mcColors.blue
				break
			case prestige > 1699:
				ctx.fillStyle = mcColors.light_purple
				break
			case prestige > 1599:
				ctx.fillStyle = mcColors.dark_red
				break
			case prestige > 1499:
				ctx.fillStyle = mcColors.aqua
				break
			case prestige > 1399:
				ctx.fillStyle = mcColors.dark_green
				break
			case prestige > 1299:
				ctx.fillStyle = mcColors.aqua
				break
			case prestige > 1199:
				ctx.fillStyle = mcColors.gold
				break
			case prestige > 1099:
				ctx.fillStyle = mcColors.white
				break
			case prestige > 999:
				var gradient = ctx.createLinearGradient(0, 0, x, y);
				gradient.addColorStop(0.1666666666666667, mcColors.gold);
				gradient.addColorStop(0.3333333333333334, mcColors.yellow);
				gradient.addColorStop(0.5, mcColors.green);
				gradient.addColorStop(0.6666666666666667, mcColors.aqua);
				gradient.addColorStop(0.8333333333333333, mcColors.light_purple);
				gradient.addColorStop(1, mcColors.dark_purple);
				ctx.fillStyle = gradient
				break
			case prestige > 899:
				ctx.fillStyle = mcColors.dark_purple
				break
			case prestige > 799:
				ctx.fillStyle = mcColors.blue
				break
			case prestige > 699:
				ctx.fillStyle = mcColors.light_purple
				break
			case prestige > 599:
				ctx.fillStyle = mcColors.dark_red
				break
			case prestige > 499:
				ctx.fillStyle = mcColors.dark_aqua
				break
			case prestige > 399:
				ctx.fillStyle = mcColors.dark_green
				break
			case prestige > 299:
				ctx.fillStyle = mcColors.aqua
				break
			case prestige > 199:
				ctx.fillStyle = mcColors.gold
				break
			case prestige > 99:
				ctx.fillStyle = mcColors.white
				break
			case prestige > 0:
				ctx.fillStyle = mcColors.gray
				break
		}
	}

	function HandleRanks(ctx, prestige, playerRank, username) {
		var x = 25 + 5
		var y = 50

		var prestigeText = `[${prestige}⭐]`
		switch (playerRank.rank) {
			case "[ADMIN]":
				ctx.fillStyle = mcColors.red
				ctx.fillText(`[ADMIN]`, ctx.measureText(prestigeText).width + x, 50);
				break;
			case "":
				break
			case "[VIP]":
				ctx.fillStyle = mcColors.green
				ctx.fillText(`[VIP]`, ctx.measureText(prestigeText).width + x, 50);
				break
			case "[VIP+]":
				ctx.fillStyle = mcColors.green
				ctx.fillText(`[VIP`, ctx.measureText(prestigeText).width + x, 50);
				ctx.fillStyle = mcColors.yellow
				ctx.fillText(`+`, ctx.measureText(prestigeText).width + ctx.measureText(`[VIP`).width + x25, 50);
				ctx.fillStyle = mcColors.green
				ctx.fillText(`]`, ctx.measureText(prestigeText).width + ctx.measureText(`[VIP+`).width + x, 50);
				break
			case "[MVP]":
				ctx.fillStyle = mcColors.aqua
				ctx.fillText(`[MVP]`, ctx.measureText(prestigeText).width + x, 50);
				break
			case "[MVP+]":
				ctx.fillStyle = mcColors.aqua
				ctx.fillText(`[MVP`, ctx.measureText(prestigeText).width + x, 50);
				ctx.fillStyle = mcColors[ playerRank.plusColor ]
				ctx.fillText(`+`, ctx.measureText(prestigeText).width + ctx.measureText(`[MVP`).width + x, 50);
				ctx.fillStyle = mcColors.aqua
				ctx.fillText(`]`, ctx.measureText(prestigeText).width + ctx.measureText(`[MVP+`).width + x, 50);
				break
			case "[MVP++]":
				ctx.fillStyle = mcColors.gold
				ctx.fillText(`[MVP`, ctx.measureText(prestigeText).width + x, 50);
				ctx.fillStyle = mcColors[ playerRank.plusColor ]
				ctx.fillText(`++`, ctx.measureText(prestigeText).width + ctx.measureText(`[MVP`).width + x, 50);
				ctx.fillStyle = mcColors.gold
				ctx.fillText(`]`, ctx.measureText(prestigeText).width + ctx.measureText(`[MVP++`).width + x, 50);
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
				ctx.fillText(playerRank.rank, ctx.measureText(prestigeText).width + x, 50);
				break
		}
		ctx.fillText(`${username}`, ctx.measureText(prestigeText).width + ctx.measureText(playerRank.rank).width + 25 + 10, 50);
		ctx.fillStyle = "#ffffff"
		prestigeGradient(ctx, prestige, ctx.measureText(prestigeText).width, ctx.measureText(prestigeText).height)
		ctx.fillText(prestigeText, 25, 50);
	}

	app.get(`/embed/bedwars/:playerName`, async (req, res) => {
		var canvas = Canvas.createCanvas(700, 250);
		var ctx = canvas.getContext('2d');
		ctx.fillStyle = "#00000000"
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill()
		ctx.fillStyle = "#363d4d"
		roundRect(ctx, 5, 5, 690, 240, 10, true, false)
		ctx.font = "32px Arial";
		ctx.fillStyle = "#ffffff"
		ctx.textAlign = "center"
		ctx.textBaseline = "middle"
		ctx.fillText(`No Stat Type Was Selected For Player:\n${req.params.playerName}`, 700 / 2, 250 / 2);
		const buffer = canvas.toBuffer('image/png')
		res.contentType('image/png')
		res.send(buffer)
	})

	app.get(`/embed/bedwars/:playerName/:type`, async (req, res) => {
		var username = req.params.playerName
		var playerRank = { rank: "[MVP++]", plusColor: "black" }
		var prestige = 1000
		var prestigeText = `[${prestige}⭐]`

		// var background = await Canvas.loadImage('./wallpaper.jpg');
		var canvas = Canvas.createCanvas(700, 250);
		var ctx = canvas.getContext('2d');
		ctx.fillStyle = "#00000000"
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill()
		ctx.fillStyle = prestigeGradient(ctx, prestige, 700, 250)
		roundRect(ctx, 0, 0, 700, 250, 10, true, false)
		ctx.fillStyle = "#363d4d"
		roundRect(ctx, 5, 5, 690, 240, 10, true, false)
		ctx.font = "32px Arial";
		HandleRanks(ctx, prestige, playerRank, username)
		// ctx.fillStyle = "#ffffff"
		// ctx.font = "32px Arial";
		// ctx.fillText(`'s Bedwars Stats`, ctx.measureText(prestigeText).width + ctx.measureText(playerRank.rank).width + ctx.measureText(username).width + 25, 50)
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
}