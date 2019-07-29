/**
 * Logger.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    IP: {
      type: 'string',
      required: true
    },
    requestHeaders: {
      type: 'string',
      required: true
    },
    requestUrl: {
      type: 'string',
      required: true
    },
    method: {
      type: 'string',
      required: true
    },
    requestBody: {
      type: 'string'
    },
    responseCode: {
      type: 'string',
      required: true
    },
    responseBody: {
      type: 'string',
      required: true
    },
    responseTime: {
      type: 'string',
      required: true
    },
    appSource: {
      type: 'string',
      required: true
    }
  }
};
