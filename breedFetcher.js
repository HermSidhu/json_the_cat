const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  if (error) console.log('error:', error); // console.log('error:', error); // Print the error if one occurred
  else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      return console.log("Are you sure you spelled the cat breed correctly?");
    } else {
      console.log(data[0].description);
    }
  }
});