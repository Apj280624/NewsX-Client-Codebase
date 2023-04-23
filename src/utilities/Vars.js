const SERVER_ORIGIN = "http://localhost:4000";
// const SERVER_ORIGIN = "https://newsx-server-codebase.onrender.com";

const vars = {
  brandName: "InfoToday",
  defaultCategoryKey: 0,
  defaultCountryKey: 0,
  nothingText: "Sorry! we found nothing",
  darkPurple: "#131022",
  lightPurple: "#7026b9",
  loaderPrimaryColor: "#ffbb00",
  loaderSecondaryColor: "#292d36",
  gradient: "#484848",
};

const routes = {
  home: "/",
  register: "/register",
  login: "/login",
};

const categoryDetails = [
  { name: "All", code: "" },
  { name: "Technology", code: "technology" },
  { name: "Science", code: "science" },
  { name: "Sports", code: "sports" },
  { name: "General", code: "general" },
  { name: "Business", code: "business" },
  { name: "Health", code: "health" },
  { name: "Entertainment", code: "entertainment" },
];
const countryDetails = [
  { name: "India", code: "in" },
  { name: "United Arab Emirates", code: "ae" },
  { name: "Argentina", code: "ar" },
  { name: "Austria", code: "at" },
  { name: "Belgium", code: "be" },
  { name: "Bulgaria", code: "bg" },
  { name: "Brazil", code: "br" },
  { name: "	Canada", code: "ca" },
  { name: "Switzerland", code: "ch" },
  { name: "China", code: "cn" },
  { name: "Colombia", code: "co" },
  { name: "Cuba", code: "cu" },
  { name: "Czechia", code: "cz" },
  { name: "Germany", code: "de" },
  { name: "Egypt", code: "eg" },
  { name: "France", code: "fr" },
  { name: "Greece", code: "gr" },
  { name: "Hong Kong", code: "hr" },
  { name: "Hungary", code: "hu" },
  { name: "Indonesia", code: "id" },
  { name: "Ireland", code: "ie" },
  { name: "Israel", code: "il" },
  { name: "Italy", code: "it" },
  { name: "Japan", code: "jp" },
  { name: "Korea, Republic of", code: "kr" },
  { name: "Lithuania", code: "lt" },
  { name: "Latvia", code: "lv" },
  { name: "Morocco", code: "ma" },
  { name: "Mexico", code: "mx" },
  { name: "Malaysia", code: "my" },
  { name: "Nigeria", code: "ng" },
  { name: "Netherlands", code: "nl" },
  { name: "Norway", code: "no" },
  { name: "New Zealand", code: "nz" },
  { name: "Philippines", code: "ph" },
  { name: "Poland", code: "pl" },
  { name: "Portugal", code: "pt" },
  { name: "Romania", code: "ro" },
  { name: "Serbia", code: "rs" },
  { name: "Russian Federation", code: "ru" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "Sweden", code: "se" },
  { name: "Singapore", code: "sg" },
  { name: "Slovenia", code: "si" },
  { name: "Slovakia", code: "sk" },
  { name: "Thailand", code: "th" },
  { name: "Türkiye", code: "tr" },
  // { name: "Taiwan, Province of China", code: "tw" },
  { name: "Ukraine", code: "ua" },
  { name: "USA", code: "us" },
  // { name: "Venezuela (Bolivarian Republic of)", code: "ve" },
  { name: "	South Africa", code: "za" },
  // { name: "United Kingdom of Great Britain and Northern Ireland", code: "gb" },
];

export { SERVER_ORIGIN, vars, routes, categoryDetails, countryDetails };

//////////////////////////////////////////////////////////////////////////////////////////////////////////
