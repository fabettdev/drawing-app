import { ColorItemObject } from "./types";

export const colors: Array<ColorItemObject> = [
  { red: 0, green: 0, blue: 0, hex: "#000000" },
  { red: 255, green: 255, blue: 255, hex: "#FFFFFF" },
  { red: 255, green: 0, blue: 0, hex: "#FF0000" },
  { red: 0, green: 255, blue: 0, hex: "#00FF00" },
  { red: 0, green: 0, blue: 255, hex: "#0000FF" },
  { red: 255, green: 255, blue: 0, hex: "#FFFF00" },
  { red: 0, green: 255, blue: 255, hex: "#00FFFF" },
  { red: 255, green: 0, blue: 255, hex: "#FF00FF" },
  { red: 192, green: 192, blue: 192, hex: "#C0C0C0" },
  { red: 128, green: 128, blue: 128, hex: "#808080" },
  { red: 128, green: 0, blue: 0, hex: "#800000" },
  { red: 128, green: 128, blue: 0, hex: "#808000" },
  { red: 0, green: 128, blue: 0, hex: "#008000" },
  { red: 128, green: 0, blue: 128, hex: "#800080" },
  { red: 0, green: 128, blue: 128, hex: "#008080" },
];

export function rgbToHex(red: number, green: number, blue: number): string {
  let redHex: string = red.toString(16);
  let greenHex: string = green.toString(16);
  let blueHex: string = blue.toString(16);
  redHex = redHex.length === 1 ? "0" + redHex : redHex;
  greenHex = greenHex.length === 1 ? "0" + greenHex : greenHex;
  blueHex = blueHex.length === 1 ? "0" + blueHex : blueHex;
  return "#" + redHex + greenHex + blueHex;
}
