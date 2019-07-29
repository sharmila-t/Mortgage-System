/**
 * InsuranceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var request = require('request');
module.exports = {
    calculate: async function(req,res)
    {
        var appraisal_value = req.body.appraisal_value;
        var mort_id = req.body.mort_id;
        var mlsid = req.body.mlsid;
        var name = req.body.name;

        var insured_value = appraisal_value * 0.70;
        var deductible_value = appraisal_value * 0.05;

        await Insurance.createEach([{mort_id:mort_id, appraisal_value: appraisal_value, insured_value:insured_value, deductible_value:deductible_value, mlsid: mlsid, name: name}]);

        url="https://prod-04.canadacentral.logic.azure.com:443/workflows/4deb1889c4e94d59b3ca84e01cfca964/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=CczRwFDUyTlPk4ptdV_7WFCVHIvlHMzRuObumI-WbXE";

        request.post(url, { json : { "mort_id" : mort_id ,"appraisal_value":appraisal_value, "insured_value": insured_value , "deductible_value": deductible_value, mlsid: mlsid,"name": name}}, 
        async function(err, response, body) {
            var _startTime = new Date();
            await Logger.create({
              IP: -1,
              requestUrl: response.request.href,
              requestBody: JSON.stringify(response.request.body),
              method: response.req.method,
              requestHeaders: JSON.stringify(response.request.headers),
              responseTime: new Date() - _startTime + ' ms',
              responseCode: response.statusCode,
              responseBody: JSON.stringify({
                body
              }),
              appSource: 'Insurance Portal'
            }).exec(function(err, result) {
              if (err) {
                console.log('Some error occured ' + err);
              }
            });
    
            // if (response.statusCode != 200 || response.statusCode != 201) {
    
            //   return res.ok({
            //     result: "Internal error while invoking internal call"
            //   }, 500);
            // }
            
            return res.ok({"status": 'success'});
            
          })

    
        } 

        
     }    

    