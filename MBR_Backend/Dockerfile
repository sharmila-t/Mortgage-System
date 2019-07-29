FROM node:11.12.0
RUN npm install sails -g
ENV NODE_ENV development 
WORKDIR D:/Dalhousie/Term_3(Summer)/Cloud/Assignment/Project/cloud-project-cluster/MBR_Backend/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
EXPOSE 8080
CMD sails lift --port 8080