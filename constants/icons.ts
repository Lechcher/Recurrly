const activity = require("@/assets/icons/activity.png") as string;
const add = require("@/assets/icons/add.png") as string;
const adobe = require("@/assets/icons/adobe.png") as string;
const back = require("@/assets/icons/back.png") as string;
const canva = require("@/assets/icons/canva.png") as string;
const claude = require("@/assets/icons/claude.png") as string;
const dropbox = require("@/assets/icons/dropbox.png") as string;
const figma = require("@/assets/icons/figma.png") as string;
const github = require("@/assets/icons/github.png") as string;
const home = require("@/assets/icons/home.png") as string;
const medium = require("@/assets/icons/medium.png") as string;
const menu = require("@/assets/icons/menu.png") as string;
const notion = require("@/assets/icons/notion.png") as string;
const openai = require("@/assets/icons/openai.png") as string;
const plus = require("@/assets/icons/plus.png") as string;
const setting = require("@/assets/icons/setting.png") as string;
const spotify = require("@/assets/icons/spotify.png") as string;
const wallet = require("@/assets/icons/wallet.png") as string;

export const icons = {
	home,
	wallet,
	setting,
	activity,
	add,
	back,
	menu,
	plus,
	notion,
	dropbox,
	openai,
	adobe,
	medium,
	figma,
	spotify,
	github,
	claude,
	canva,
} as const;

export type IconKey = keyof typeof icons;
