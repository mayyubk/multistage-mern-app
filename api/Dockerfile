# Stage 1 
#base image 

FROM node:18 As build 

WORKDIR /app

COPY package*.json .

RUN npm install 

COPY . . 

# Stage 2 

FROM node:18 AS production 

WORKDIR /app
 
COPY package*.json .

RUN npm install --omit=dev 
COPY --from=build /app /app
EXPOSE 5000 

# --- ADD THIS LINE ---
# This tells the container to run your server
CMD [ "node", "index.js" ]
