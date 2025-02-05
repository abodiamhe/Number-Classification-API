const axios = require("axios");

exports.fetchFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math?json`, { timeout: 400 });
    const data = response.data.text;

    return data;
  } catch (err) {
    throw new Error(err);
  }
};
