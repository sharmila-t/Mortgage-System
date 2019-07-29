/**
 * BrokerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var request = require('request');
module.exports = {

login : async function(req,res){
  console.log("entered****");
  var uname = req.body.username;
  var pwd = req.body.password;
		if(uname == "" || pwd == "") {
			res.send("No username or password specified!",500);
    }
    else{
     await Employer.find( { "employeeID": uname , "password": pwd}).exec(function(err,result){
          if (err) {
                sails.log.debug('Some error occured ' + err);
                return res.json(500, { error: 'Please enter valid user name and password' });
            }
            else
                {
                  if(result != ""){
                sails.log.debug('Success', JSON.stringify(result));
                   res.json(200, {login : "success"});
                  }
                else
                  {
                    return res.json(500, { error: 'Please enter valid user name and password' });
                  }
                 
                } 
      });

    }

},

recieveFromEmployer : async function(req,res) {
  
  var empid = req.body.employeeID;
  var mortId = req.body.mortId;
  var url = req.body.url;
  var employee;
  console.log(empid,mortId);
  if( empid != ""){
    employee = await Employer.findOne({employeeID:empid}) 
  }
  else{
    res.json(500, { error: 'Enter employee id' });
  }
  //console.log(employee,"when employee is mnull");

  if(employee != " " && employee != undefined)
  {  
//url="https://prod-29.canadacentral.logic.azure.com:443/workflows/17dc5a6fb1fc44f294e45298b92d38c4/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ZTKHLHeZ2Jj-eWAbey1FGbgQuiDGoKbmOiQh6bZgBCY";
request.post(url, { json : { "mort_id" : mortId ,"name":employee.name, "salary": employee.salary , "employment_len": employee.length}
}, async function(err, response, body) {
  //console.log(response,err,body);
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
          appSource: 'RE Portal'
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

        res.ok({
          result: 'Application updated succesfully'
        });
      });

  }
else 
{
  return res.json(500, { error: 'Enter valid employee id' });
}
}
};

