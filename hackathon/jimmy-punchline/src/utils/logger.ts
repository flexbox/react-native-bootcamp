export const logger = (
  message: any,
  type: "info" | "error" | "table" = "info"
) => {
  if (!__DEV__) {
    return;
  }
  switch (type) {
    case "info":
      console.info(message);
      break;
    case "error":
      // Note: this is not error to not give wrong info to remote debugger
      console.error(`\n==============`);
      console.error(message);
      console.error(`==============\n`);
      break;
    case "table":
      console.table(message);
      break;
    default:
      console.info(message);
      break;
  }
};
