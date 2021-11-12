/**
 * Creates a new Date object using a Unix timestamp
 * @param unixTimestamp
 * @returns a new Date object created from the passed Unix timestamp
 */
export const createDateFromUnixTimestamp = (unixTimestamp: number): Date => {
  return new Date(unixTimestamp * 1000);
};

/**
 * Compares two dates an returns true if the dates are on the same day
 * @param dateOne
 * @param dateTwo
 * @returns true if the dates are on the same day
 */
export const areDatesOnSameDay = (dateOne: Date, dateTwo: Date): boolean => {
  return (
    dateOne.getFullYear() === dateTwo.getFullYear() &&
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getDay() === dateTwo.getDay()
  );
};

/**
 * Converts a Unix timestamp into a human readable string
 * @param unixTimestamp
 * @param options DateTimeFormatOptions that can be used to change the way the passed timestamp is formatted
 * @returns a human readable string representation of the passed Unix timestamp
 */
export const getHumanReadableDateString = (
  unixTimestamp: number,
  options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', hour: 'numeric' }
): string => {
  return Intl.DateTimeFormat('en-US', options).format(createDateFromUnixTimestamp(unixTimestamp));
};

/**
 * Extracts the weekday from a Unix timestamp
 * @param unixTimestamp
 * @param useTodayLabel If true, if the passed UnixTimestamp is the current day, 'Today' will be returned rather than the weekday
 * @returns the weekday of the passed Unix timestamp
 */
export const getDayAsString = (unixTimestamp: number, useTodayLabel = false): string => {
  const unixTimestampAsDate = createDateFromUnixTimestamp(unixTimestamp);

  if (areDatesOnSameDay(unixTimestampAsDate, new Date()) && useTodayLabel) return 'Today';

  return Intl.DateTimeFormat('en-us', { weekday: 'long' }).format(unixTimestampAsDate);
};
