//use this to generate a random day on the database to start at
const random_key = 98370474095984;
const num_horoscope_days = 660;
const starting_point = random_key % num_horoscope_days;

// 1. Get the days from start
const date = new Date();
const current_year = date.getFullYear();
const current_month = date.getMonth();
const current_day = date.getDate();
const current_date = new Date(current_year, current_month, current_day);
const starting_date = new Date(2023, 4, 8); 
const days_from_start = Math.floor((current_date - starting_date) / (1000 * 60 * 60 * 24)); 

// access the json file in the database folder
const fs = require('fs');
const { get } = require('http');


/* Function that gets the day's horoscope for a specific sign
/ @param horoscope_sign_as_number: the number of the sign (1-12)
/ @return: the horoscope for the day as a string
*/
const get_horoscope = function(horoscope_sign_as_number) {
    const horoscope_json = require('./database/horoscope_db.json');
    const horoscope_index = (starting_point + days_from_start) % num_horoscope_days;
    return horoscope_json[horoscope_index + (horoscope_sign_as_number - 1) * num_horoscope_days]["description"];
}

// test the function for all numbers 1-12
for (let i = 1; i <= 12; i++) {
    console.log("Sign: " + i + "\n");
    console.log(get_horoscope(i));
    console.log("\n");
}
