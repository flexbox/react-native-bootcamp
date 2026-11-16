// iOS Large Titles stop growing at 60pt, while body text keeps scaling with
// Dynamic Type. Capping titles there keeps them larger than body text without
// splitting words like "Starships" across lines.
export const TITLE_MAX_FONT_SIZE = 60;
