export const useImage = (title: string) => {
  const imageName = `${title.toLowerCase().replace(" ", "")}`;

  let source;
  switch (imageName) {
    case "cr90corvette":
      source = "CR90corvette";
      break;
    case "stardestroyer":
      source = "stardestroyer";
      break;
    case "sentinel-classlanding craft":
      source = "sentinel_classlandingcraft";
      break;
    case "deathstar":
      source = "deathstar";
      break;
    case "millenniumfalcon":
      source = "millenniumfalcon";
      break;
    case "y-wing":
      source = "y_wing";
      break;
    case "x-wing":
      source = "x_wing";
      break;
    case "tieadvanced x1":
      source = "tieadvancedx1";
      break;
    case "executor":
      source = "executor";
      break;
    case "rebeltransport":
      source = "rebeltransport";
      break;
  }
  return source;
};
