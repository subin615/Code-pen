/**
 *
 * @param {String} value  It can be date or date with time
 * @returns {String}  Returns Dec 05, 2020.
 */
function getDateFormat(value) {
  const dateArray = value.split(" ")[0].split("-");
  const monthValue = [
    { monthValue: "01", monthName: "Jan" },
    { monthValue: "02", monthName: "Feb" },
    { monthValue: "03", monthName: "Mar" },
    { monthValue: "04", monthName: "Apr" },
    { monthValue: "05", monthName: "May" },
    { monthValue: "06", monthName: "Jun" },
    { monthValue: "07", monthName: "Jul" },
    { monthValue: "08", monthName: "Aug" },
    { monthValue: "09", monthName: "Nov" },
    { monthValue: "10", monthName: "Oct" },
    { monthValue: "11", monthName: "Nov" },
    { monthValue: "12", monthName: "Dec" },
  ];
  const monthObj = monthValue.find((item) => item.monthValue === dateArray[1]);
  return monthObj?.monthName + " " + dateArray[2] + ", " + dateArray[0];
}

module.exports = getDateFormat;
