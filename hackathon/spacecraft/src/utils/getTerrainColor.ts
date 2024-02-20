const terrainColorMap = {
  desert: "#EDC9AF",
  grasslands: "#7CFC00",
  mountains: "#8B4513",
  jungle: "#228B22",
  rainforests: "#006400",
  tundra: "#D3D3D3",
  "ice caves": "#ADD8E6",
  "mountain ranges": "#8B4513",
  swamp: "#556B2F",
  jungles: "#228B22",
  "gas giant": "#FFD700",
  forests: "#228B22",
  lakes: "#0000FF",
  "grassy hills": "#7CFC00",
  cityscape: "#A9A9A9",
  ocean: "#0000FF",
};

export function getTerrainColor(terrain: string) {
  console.log("🚀 ~ terrain:", terrain);
  for (const [key, color] of Object.entries(terrainColorMap)) {
    if (terrain.includes(key)) {
      return color;
    }
  }

  return "#000000"; // default color if no match
}
