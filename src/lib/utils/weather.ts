const CLEAR_WEATHER_TYPE_DESCRIPTIONS: { [weatherId: number]: string } = {
  800: 'Clear',
  801: 'Partly Cloudy',
  802: 'Partly Cloudy',
  803: 'Cloudy',
  804: 'Cloudy',
};

export function getWeatherDescription(owmWeatherId: number, owmWeatherMain: string) {
  const weatherTypeId = Math.floor(owmWeatherId / 100);

  switch (weatherTypeId) {
    case 2:
      return 'Thunderstorms';
    case 3:
      return 'Rain';
    case 5:
      return 'Rain';
    case 6:
      return 'Snow';
    case 7:
      return owmWeatherMain;
    case 8:
      return CLEAR_WEATHER_TYPE_DESCRIPTIONS[owmWeatherId];
    default:
      return 'Unknown Weather';
  }
}
