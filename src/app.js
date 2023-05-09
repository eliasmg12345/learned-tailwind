const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://volleyball-data.p.rapidapi.com/team/schedule',
  params: {teamId: '1050'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'volleyball-data.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}