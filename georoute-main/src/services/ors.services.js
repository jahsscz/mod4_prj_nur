const axios = require('axios');
const config = require('../config/config');

const getDirections = (start,end,profile) => {
    
        return axios({
            method: 'get',
            url: `${config.HOST_ORS}/ors/V2/directions/${profile}?api_key=${config.API_KEY_ORS}&start=${start}&end=${end}`,
        })
    }


module.exports = {
    getDirections
 
}