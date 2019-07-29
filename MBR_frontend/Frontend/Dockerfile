FROM node:11.12.0
RUN npm install sails -g
ENV NODE_ENV development 
WORKDIR Z:/cloud-assignment5-master/MBR_Frontend/Employee_app/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
EXPOSE 1337
CMD sails lift