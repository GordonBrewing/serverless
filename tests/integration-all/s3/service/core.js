'use strict';

const { log } = require('./utils');

function minimal(event, context, callback) {
  const functionName = 'minimal';
  const response = { message: `Hello from S3! - (${functionName})`, event };
  const message = [
    event.Records[0].eventSource,
    event.Records[0].eventName,
    ' ',
    response.message,
  ].join('');
  log(functionName, message);
  return callback(null, response);
}

function extended(event, context, callback) {
  const functionName = 'extended';
  const response = { message: `Hello from S3! - (${functionName})`, event };
  const message = [
    event.Records[0].eventSource,
    event.Records[0].eventName,
    ' ',
    response.message,
  ].join('');
  log(functionName, message);
  return callback(null, response);
}

function existing(event, context, callback) {
  const functionName = 'existing';
  const response = { message: `Hello from S3! - (${functionName})`, event };
  const message = [
    event.Records[0].eventSource,
    event.Records[0].eventName,
    ' ',
    response.message,
  ].join('');
  log(functionName, message);
  return callback(null, response);
}

module.exports = { minimal, extended, existing };
