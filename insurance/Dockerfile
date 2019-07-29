FROM node:11.12.0
RUN npm install sails -g
ENV NODE_ENV development 
WORKDIR C:/Cloud projects/Final project/cloud-project-cluster/insurance/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
EXPOSE 8080
CMD sails lift --port 8080
