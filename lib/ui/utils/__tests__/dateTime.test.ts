import {
  createDateFromUnixTimestamp,
  areDatesOnSameDay,
  getHumanReadableDateString,
  getDayAsString,
} from '../dateTime';

describe('dateTime utility functions', () => {
  describe('createDateFromUnixTimeStamp utility function', () => {
    it('should correct convert a date using a unix timestamp', () => {
      const result = createDateFromUnixTimestamp(825750000);
      expect(result.getDate()).toBe(2);
      expect(result.getMonth()).toBe(2);
      expect(result.getFullYear()).toBe(1996);
    });
  });

  describe('areDatesOnSameDay utility function', () => {
    it('should return true when dates are on the same day', () => {
      const result = areDatesOnSameDay(new Date(), new Date());
      expect(result).toBe(true);
    });

    it('should return false when dates are on different days', () => {
      const result = areDatesOnSameDay(new Date(), new Date(1));
      expect(result).toBe(false);
    });
  });

  describe('getHumanReadableDateString utility function', () => {
    it('should return the correct human readable string for a given date without passing options', () => {
      const result = getHumanReadableDateString(825750000);
      expect(result).toBe('Mar 2, 12 AM');
    });

    it('should return the correct human readable string for a given date with passed options', () => {
      const result = getHumanReadableDateString(825750000, { day: 'numeric', month: 'long', year: 'numeric' });
      expect(result).toBe('March 2, 1996');
    });
  });

  describe('getDayAsString utility function', () => {
    it('should return the correct day as a string', () => {
      const result = getDayAsString(825750000);
      expect(result).toBe('Saturday');
    });

    it('should return the correct text when passed todays date and the useTodayLabel flag', () => {
      const result = getDayAsString(Date.now() / 1000, true);
      expect(result).toBe('Today');
    });
  });
});
