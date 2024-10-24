export const getDateRange = (timeframe) => {
  let to = new Date();
  let from = new Date();
  let timespan = "";
  let value = 1;

  switch (timeframe) {
    case "1d":
      from.setDate(to.getDate() - 1);
      timespan = "minute";
      value = 26;
      break;
    case "3d": {
      from.setDate(to.getDate() - 3);
      timespan = "minute";
      value = 50;
      break;
    }
    case "1w": {
      from.setDate(to.getDate() - 7);
      timespan = "hour";
      value = 8;
      break;
    }
    case "1m": {
      from.setMonth(to.getMonth() - 1);
      timespan = "hour";
      value = 5;
      break;
    }
    case "6m": {
      from.setMonth(to.getMonth() - 6);
      timespan = "day";
      value = 1;
      break;
    }
    case "1y": {
      from.setFullYear(to.getFullYear() - 1);
      timespan = "day";
      value = 2;
      break;
    }
    case "max":
      from.setFullYear(to.getFullYear() - 5);
      timespan = "day";
      value = 3;
    default:
      break;
  }

  const formattedFromDate = from.toISOString().split("T")[0];
  const formattedToDate = to.toISOString().split("T")[0];

  return { formattedFromDate, formattedToDate, timespan, value };
};
