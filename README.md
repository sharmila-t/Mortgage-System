## Mortgage System
  Mortgagae System is a Cloud based SAAS application. Four Portals has been implemented as the part of the system.
  
## System Architecture

All the application designed has a three-tier architecture which is implemented by using the below  
* Database - MySQL Server
* Backend - Sails JS and Waterline 
* Frontend - Sails JS


## Framework and tools 
1. MYSQL Workbench –  To facilitate SQL development with integrated administration and database design.

2. Sails JS – used to create a webservice (REST API) that can be accessed by any client using XMLHTTP request. 
 
3. Postman – desktop tool/client to test APIs. It provides all the necessary options to send an API request from the client.
 
4. Docker –  tool that is used to containerize the applications.

5.	Oracle VM VirtualBox – Oracle VM is an open source virtualization software that is used to run virtual machines (VM). It plays the role of the hypervisor in container architecture.

6.	Kitematic – desktop GUI tool for running and managing Docker containers. It is bundled with docker toolbox and so no other extra step required to install/set up this tool. We will also be able to integrate the docker hub our account to our local system using this tool.
 
7. Azure-cli – command line interface provided by Microsoft Azure to facilitate the deployment from terminal. I’ve used specified commands in that to deploy the web app to cloud environment. 

## Project Modules 
* MBR Portal  - MBR portal facilitates an interface for the customers to file a mortgage application and to keep track of the status of their applications. 
* Employer Portal  - The employee details like the employee's length of employment and salary are managed in this portal by the employer which will be sent to MBR portal on employee request.
* Real Estate Portal - The customer submits the form for evaluation of the house to the appraiser. The appraiser receives the request and then performs the evaluation generating the appraiser value which will be sent to Insurance Portal. 
* Insurance Portal - The insurance is a webservice which triggeres a webhook to update the eveluation result to MBR Portal, hence there is no frontend developed for this portal. 
* Logger Service - This a web service which logs all the request and response in the system across the portal. It is implemented by adding it as a middleware. Middleware will have complete access to both the request and response object.
* Web hooks - Web hooks are created using azure logic app which updates the status of the mortgage application when a event is triggered.

##  Dockerizing 
The DOCKERFILE with all the required configuration is created for each potal's frontend and webservice. Docker image can be created using this configuration. Docker Hub repository is used to hold all the images in cloud.

## Scalability
   All the webservices are hosted separately from their UI counterpart. This ensures that webservices (backend services) are scaled accordingly with demand. Separating the webservice from the client application removes the dependencies and creates a smooth transition case in the event of load balancing and auto-scaling. 

## References

[1] AJAX - Send a Request To a Server. (n.d.). Retrieved August 2, 2019, from https://www.w3schools.com/js/js_ajax_http_send.asp  

[2] Company, T. S. (n.d.). Sails. Retrieved August 2, 2019, from https://sailsjs.com/getstarted 

[3] Company, T. S. (n.d.). Session. Retrieved August 2, 2019, from https://sailsjs.com/documentation/reference/configuration/sails-config-session  

[4] Cephalin. (n.d.). Create Node.js web app - Azure App Service. Retrieved from https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs 

[6] Docker Documentation. (2019, August 02). Retrieved August 2, 2019, from https://docs.docker.com/ [5] Logger In Sails.js. (n.d.). Retrieved August 2, 2019, from https://jumpstartsails.blogspot.com/2015/09/logger-in-sailsjs.html  

[7] Logic App Service: Microsoft Azure. (n.d.). Retrieved August 2, 2019, from https://azure.microsoft.com/en-ca/services/logic-apps/ 
 
