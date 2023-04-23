import { SERVER_ORIGIN } from "./Vars.js";

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function exists(word) {
  if (word && word.length > 0) {
    return true;
  }

  return false;
}

function generateGetURL(category, country) {
  // console.log(category, country);

  let URL =
    SERVER_ORIGIN +
    "/api/top-headlines/?" +
    "category=" +
    category +
    "&" +
    "country=" +
    country;
  return URL;
}

const generateRegisterURL = () => {
  return SERVER_ORIGIN + "/api/register";
};

const generateLoginURL = () => {
  return SERVER_ORIGIN + "/api/login";
};

const generateLikeURL = (itemURL) => {
  return SERVER_ORIGIN + "/api/like-item/?itemURL=" + itemURL;
};

function generateSearchURL(keyword) {
  let URL = SERVER_ORIGIN + "/api/search/?" + "keyword=" + keyword;
  return URL;
}

function generateAxiosConfigHeader(token) {
  // console.log(token);
  const axiosConfig = {
    headers: {
      "auth-token": token,
    },
  };

  // console.log(axiosConfig);
  return axiosConfig;
}

export {
  generateGetURL,
  generateSearchURL,
  generateRegisterURL,
  generateLoginURL,
  generateLikeURL,
  exists,
  generateAxiosConfigHeader,
};
