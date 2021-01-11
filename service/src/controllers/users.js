const { request, response } = require('express');
const queries = require('../queries');

exports.getUsers = (request, response) => {
    queries.getUsers(request, response);
};

exports.getUserById = (request, response) => {
    queries.getUsers(request, response);
}

exports.createUser = (request, response) => {
    queries.createUser(request, response);
}

exports.updateUser = (request, response) => {
    queries.updateUser()
}