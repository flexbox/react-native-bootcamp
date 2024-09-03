const terrainColorMap = {
  cityscape: "#A9A9A9",
  desert: "#EDC9AF",
  forests: "#228B22",
  "gas giant": "#FFD700",
  grasslands: "#7CFC00",
  "grassy hills": "#7CFC00",
  "ice caves": "#ADD8E6",
  jungle: "#228B22",
  jungles: "#228B22",
  lakes: "#0000FF",
  "mountain ranges": "#8B4513",
  mountains: "#8B4513",
  ocean: "#0000FF",
  rainforests: "#006400",
  swamp: "#556B2F",
  tundra: "#D3D3D3",
};

export function getTerrainColor(terrain: string) {
  for (const [key, color] of Object.entries(terrainColorMap)) {
    if (terrain.includes(key)) {
      return color;
    }
  }

  return "#000000"; // default color if no match
}
