/**
 * @description
 * Example date string: 2019-01-02T13:05:00 (expects ISO 8601 Datetime format yyyy-mm-ddThh:mm:ss [this is the format returned from Contensis delivery api])
 *
 * yyyy > year long, eg. 2019
 * yy > year short, eg. 19
 *
 * MMMM > month long, eg. January
 * MMM > month short, eg. Jan
 * MM > month with leading 0, eg. 01
 * M > month, eg. 1
 *
 * dddd > day long, eg. Monday
 * ddd > day short, eg. Mon
 * dd > date with leading 0, eg. 02
 * d > date, eg. 2
 *
 * HH > 24 hour clock hour parameter with leading 0, eg. ...T03:05:00 = 03
 * H > 24 hour clock hour parameter, eg. ...T03:05:00 = 3
 * hh > 12 hour clock hour parameter with leading 0, eg. ...T16:05:00 = 04
 * h > 12 hour clock hour parameter, eg. ...T16:05:00 = 4
 *
 * mm > minutes with leading 0, eg. ...T16:05:00 = 05
 * m > minutes, eg ...T16:05:00 = 5
 *
 * t > abbreviated AM / PM, e.g. A or P
 * tt > AM / PM, e.g. AM or PM
 *
 * ~ > ordinal indicator eg 2'nd', 4'th'
 */

/**
 * Formats a given ISO date string based on the provided format string.
 * @param {string} isoDate - The ISO date string to format.
 * @param {string} format - The format string specifying the desired output format.
 * @returns {string|null} Returns the formatted date string or null if the input isoDate is falsy.
 */
export const formatDate = (isoDate: string, format: string): string | null => {
  if (!isoDate) return null;
  const dateObj = new Date(isoDate);
  const dayNameInt = dateObj.getDay();
  const dt = isoDate.split('T');
  const d = dt[0].split('-');
  const t = dt[1].split(':');
  const [year, month, day] = d;
  const [hour, minute] = t;

  //  We need to abstract 'M' and 'd' characters in the date format to prevent
  //  erroneous string replacements in the chain eg. Would replace the 'd' in Monday
  //  The rest of the replacement chain has been ordered to prevent erroneous replacements
  const MONTH = ['$', '$$', '$$$', '$$$$'];
  const DAY = ['£', '££', '£££', '££££'];

  return format
    .replace(/d/g, DAY[0]) // abstract characters to prevent erroneous string replacements
    .replace(/M/g, MONTH[0]) // abstract characters to prevent erroneous string replacements
    .replace('HH', hour)
    .replace('H', parseInt(hour).toString())
    .replace('hh', forceTwoDigitNumber(parseHour(parseInt(hour))))
    .replace('h', parseHour(parseInt(hour)).toString())
    .replace('mm', minute)
    .replace('m', parseInt(minute).toString())
    .replace('tt', parseTF(parseInt(hour)))
    .replace('t', parseTF(parseInt(hour)).slice(0, 1))
    .replace('~', '')
    .replace('yyyy', year)
    .replace('yy', year.slice(-2))
    .replace(MONTH[3], monthsLong[parseInt(month)])
    .replace(MONTH[2], monthsShort[parseInt(month)])
    .replace(MONTH[1], month)
    .replace(MONTH[0], parseInt(month).toString())
    .replace(DAY[3], daysLong[dayNameInt])
    .replace(DAY[2], daysShort[dayNameInt])
    .replace(DAY[1], day)
    .replace(DAY[0], parseInt(day).toString());
};

/**
 * Formats a date range consisting of 'from' and 'to' ISO date strings into a single string representation.
 * @param {{ from: string, to: string }} dateRange - The date range object containing 'from' and 'to' ISO date strings.
 * @param {string} dateFormat - The format string specifying the desired output format for each date in the range.
 * @param {string} [separator=' - '] - The separator string to be used between 'from' and 'to' date strings.
 * @returns {string|null} Returns the formatted date range string or null if the input dateRange is falsy.
 */
export const formatDateRange = (
  dateRange: { from: string; to: string },
  dateFormat: string,
  separator = ' - '
): string | null => {
  if (!dateRange) return null;
  if (!dateFormat) return `${dateRange.to} - ${dateRange.from}`;

  const dFrom = dateRange.from;
  const dFromDate = formatDate(dFrom, dateFormat);
  const dTo = dateRange.to;
  const dToDate = formatDate(dTo, dateFormat);

  let dateTime = '';

  if (dFromDate === dToDate && dFromDate) {
    dateTime = dFromDate;
  } else {
    dateTime = `${dFromDate}${separator}${dToDate}`;
  }

  return dateTime;
};

/**
 * An array containing short month names indexed from 1 to 12.
 * @type {string[]}
 */
export const monthsShort: string[] = [
  '',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/**
 * An array containing long month names indexed from 1 to 12.
 * @type {string[]}
 */
export const monthsLong: string[] = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * An array containing short day names indexed from 0 to 6 (Sunday to Saturday).
 * @type {string[]}
 */
const daysShort: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * An array containing long day names indexed from 0 to 6 (Sunday to Saturday).
 * @type {string[]}
 */
const daysLong: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/**
 * Parses the hour value to a 12-hour format.
 * @param {number} hour - The hour value (0-23).
 * @returns {number} Returns the hour value in 12-hour format.
 */
const parseHour = (hour: number): number => {
  return hour > 12 ? hour - 12 : hour;
};

/**
 * Determines the time period (AM/PM) based on the hour value.
 * @param {number} hour - The hour value (0-23).
 * @returns {string} Returns 'AM' if the hour is less than 12, otherwise 'PM'.
 */
const parseTF = (hour: number): string => {
  return hour > 11 ? 'PM' : 'AM';
};

/**
 * Determines the ordinal indicator for the given day.
 * @param {string} day - The day value as a string.
 * @returns {string} Returns the ordinal indicator ('st', 'nd', 'rd', or 'th') for the given day.
 */
const parseOrdinalIndicator = (day: string): string => {
  if ([1, 21, 31].includes(parseInt(day))) return 'st';
  if ([3, 23].includes(parseInt(day))) return 'rd';
  if ([2, 22].includes(parseInt(day))) return 'nd';
  else return 'th';
};

/**
 * Forces a number to be represented with two digits by padding with leading zeros if necessary.
 * @param {number} num - The number to be forced to two digits.
 * @returns {string} Returns the two-digit representation of the given number.
 */
const forceTwoDigitNumber = (num: number): string => {
  return ('0' + num).slice(-2);
};
