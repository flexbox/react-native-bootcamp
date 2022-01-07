import color from 'color';
export default function getContrastingColor(input, light, dark) {
  if (typeof input === 'string') {
    return color(input).isLight() ? dark : light;
  }

  return light;
}
//# sourceMappingURL=getContrastingColor.js.map