export const getGlobalData = async () => {
  const response = await fetch('https://covid19.mathdro.id/api');
  const globalData = await response.json();
  return globalData;
};

export const getGlobalDaily = async () => {
  const response = await fetch('https://covid19.mathdro.id/api/daily');
  const globalDaily = await response.json();
  return globalDaily;
};

export const getProvinces = async () => {
  const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi');
  const provinces = (await response.json()).data;
  return provinces;
};

export const getIndonesiaSummary = async () => {
  const response = await fetch('https://indonesia-covid-19.mathdro.id/api');
  const summary = await response.json();
  return summary;
};

export const getCountryList = async () => {
  const response = await fetch('https://covid19.mathdro.id/api/countries');
  const countries = await response.json();
  return countries;
};

export const getDailyCase = async () => {
  const response = await fetch('https://indonesia-covid-19.mathdro.id/api/harian');
  const dailyCase = (await response.json()).data;
  return dailyCase;
};