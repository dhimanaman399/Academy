"use strict";
const Admin = require("../schema/admin");
const dbOperations = {
    saveFormData,
    getFormData
};
module.exports = dbOperations;

function saveFormData(data, callback = () => {}){
    
    Admin.create(data, function saveFormDataDbCb(error, resultQuery) {
        if (error) {
            return callback(error, null);
        }
        return callback(null, resultQuery);
    });
}

function getFormData(){
    //Admin.find()
}