/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */


module.exports.http = {

  /****************************************************************************
   *                                                                           *
   * Sails/Express middleware to run for every HTTP request.                   *
   * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
   *                                                                           *
   * https://sailsjs.com/documentation/concepts/middleware                     *
   *                                                                           *
   ****************************************************************************/

  middleware: {

    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP requests.           *
     * (This Sails app's routes are handled by the "router" middleware below.)  *
     *                                                                          *
     ***************************************************************************/

    // order: [
    //   'cookieParser',
    //   'session',
    //   'bodyParser',
    //   'compress',
    //   'logger',
    //   'poweredBy',
    //   'router',
    //   'www',
    //   'favicon',
    // ],

    // logger: async function(req, res, next) {
    //   console.log('Initializing `logger` (HTTP middleware)...');
    //   console.log('Received HTTP request: ' + req.method + ' ' + req.path + ' ' + req.ip);
    //   res.on('finish', async function() {
    //     console.log('Sent HTTP response: ' + res.statusCode);

    //     await Logger.create({
    //       IP: req.ip,
    //       requestUrl: req.path,
    //       requestBody: JSON.stringify(req.body),
    //       method: req.method,
    //       requestHeaders: JSON.stringify(req.headers),
    //       responseTime: new Date() - req._startTime + ' ms',
    //       responseCode: res.statusCode,
    //       appSource: 'Employer Portal'
    //     }).exec(function(err, result) {
    //       if (err) {
    //         console.log('Some error occured ' + err);
    //       }
    //     });
    //   })

    //   return next();
    // },


    /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests.       *
     *                                                                          *
     * https://sailsjs.com/config/http#?customizing-the-body-parser             *
     *                                                                          *
     ***************************************************************************/

    // bodyParser: (function _configureBodyParser(){
    //   var skipper = require('skipper');
    //   var middlewareFn = skipper({ strict: true });
    //   return middlewareFn;
    // })(),

  },

};