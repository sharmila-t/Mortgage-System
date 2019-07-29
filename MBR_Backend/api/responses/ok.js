module.exports = async function ok(data, statusCode) {

    var req = this.req;
    var res = this.res;
    var sails = req._sails;
  
    console.log(data);
    if (!statusCode) {
      statusCode = "200";
    }
  
    await Logger.create({
      IP: req.ip,
      requestUrl: req.path,
      requestBody: JSON.stringify(req.body),
      method: req.method,
      requestHeaders: JSON.stringify(req.headers),
      responseTime: new Date() - req._startTime + ' ms',
      responseCode: statusCode,
      responseBody: JSON.stringify(data),
      appSource: 'MBR Portal'
    }).exec(function(err, result) {
      if (err) {
        console.log('Some error occured ' + err);
      }
    });
  
  
    return res.status(statusCode).send(data);
  }
  