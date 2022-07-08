const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    occupation: String,
    company: String,
    salary: Number,
    approved: Boolean,
    minority: Boolean,
})

module.exports = Person;