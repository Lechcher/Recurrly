// Bỏ "as string" đi
const avatar = require("@/assets/images/avatar.png");
const splashPattern = require("@/assets/images/splash-pattern.png");

export const images = { 
  splashPattern, 
  avatar 
} as const;

export type ImageKey = keyof typeof images;