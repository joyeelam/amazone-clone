# Amazon_clone
An Amazon clone created using MERN stack (MongoDB, ExpressJS, React and Node.JS)

## Language and Tools:
- HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
- React: Components, Props, Events, Hooks, Router, Axios
- Redux: Store, Reducers, Actions
- Node & Express: Web API, Body Parser, JWT
- MongoDB: Mongoose, Aggregation
- Postman

## Running Locally
### 1. Clone repo
```
$ git clone https://github.com/joyeelam/amazone-clone.git
$ cd amazone
```
### 2. Setup MongoDB
- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb://localhost/amazone
### 3. Run Backend (_api)
```
$ npm install
$ npm start
```
### 4. Run Frontend (_web)
```
# open new terminal
$ cd _web
$ npm install
$ npm start
```
### 5. Seed Users and Products
- Run this on chrome: http://localhost:5000/api/users/seed
- This initializes admin and sample user
- Run this on chrome: http://localhost:5000/api/products/seed
- This initializes 6 sample products
