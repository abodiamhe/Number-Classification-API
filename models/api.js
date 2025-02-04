const axios = require("axios");

exports.fetchFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}`);
    const data = response.data;

    return data;
  } catch (err) {
    throw new Error(err);
  }
};
