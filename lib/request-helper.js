const _ = require('lodash');
const axios = require('axios');

const getData = async opts => {
  const baseOptions = {
    uri: '',
    qs: {},
    baseUrl: '',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  const options = _.merge(baseOptions, opts); // merge base options with options from the test
  let response = null;
  response = await axios.get(options.url, options).then(response => response.data).catch(error => error.message);
  return response;
};

module.exports = {
  getData
}
