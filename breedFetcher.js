const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) callback(error, null); // console.log('error:', error); // Print the error if one occurred
    else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, "Are you sure you spelled the cat breed correctly?");
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };