const activity = require("@/assets/icons/activity.png");
const add = require("@/assets/icons/add.png");
const adobe = require("@/assets/icons/adobe.png");
const back = require("@/assets/icons/back.png");
const canva = require("@/assets/icons/canva.png");
const claude = require("@/assets/icons/claude.png");
const dropbox = require("@/assets/icons/dropbox.png");
const figma = require("@/assets/icons/figma.png");
const github = require("@/assets/icons/github.png");
const home = require("@/assets/icons/home.png");
const medium = require("@/assets/icons/medium.png");
const menu = require("@/assets/icons/menu.png");
const notion = require("@/assets/icons/notion.png");
const openai = require("@/assets/icons/openai.png");
const plus = require("@/assets/icons/plus.png");
const setting = require("@/assets/icons/setting.png");
const spotify = require("@/assets/icons/spotify.png");
const wallet = require("@/assets/icons/wallet.png");

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
