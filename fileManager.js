// #CommonJS

const { rejects } = require('assert');
const { resolve } = require('dns');
const fs = require('fs');

function createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, {recursive: true}, (err) => {
            if(err) {
                reject(err);
            } else {
                resolve(`Directory ${dirPath} created successfuly`);
            };
        });
    });
};

function createdFile(filePath, content = '') {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf-8', (err) => {
            if(err) {
                reject(err);
            } else {
                resolve(`File ${filePath} created successfuly`);
            };
        });
    });

};

function listFiles(filePath) {
    return new Promise((resolve, reject) => {
        fs.readdir(filePath, (err, files) => {
            if(err){
                reject(err);
            } else {
                resolve(files);
            };
        });
    });
};

function readFile(filePath) {
    return new Promise((resolve, reject) =>{
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if(err){
                reject(err);
            } else {
                resolve(data)
            }
        });
    });
};

function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf-8', (err) => {
            if(err){
                reject(err);
            } else {
                resolve('File written successfuly');
            };
        });
    });
};

function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if(err){
                reject(err);
            } else {
                resolve('File deleted successfuly');
            };
        });
    });
};

module.exports = {createDirectory, createdFile, listFiles, readFile, writeFile, deleteFile}