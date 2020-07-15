# React Shopping Cart

https://react-shopping-cart-nooras.herokuapp.com/

# Steps of react flow

![Reduc Flow](redux_flow.jpg)

## Step 1:
Views - React Components

## Step 2:
Action creators

## Step 3:
Reducers

## Step 4:
Store(state hub)


## Install react-reveal
- npm install react-reveal
- yarn add react-reveal

## Install react-modal
- npm install react-modal
- yarn add react-modal

## Install react-redux
- npm install react-redux
- yarn add react-redux

## Install shortid mongoose express body-parser
- npm install shortid mongoose express body-parser
- yarn add shortid mongoose express body-parser

## Steps for deploy on heroku:

1. Create account on https://cloud.mongodb.com/
2. Create database in collection
3. Netwrok access - Add ip address 0.0.0.0/0
4. Create datbase accesss user
4. Create account on https://dashboard.heroku.com/apps
5. Install in Linux sudo snap install --classic heroku (https://cli-auth.heroku.com/)
6. Type *heroku login* on terminal
7. Create link by linux CLI  *heroku apps:create react-shopping-cart-nooras*
8. Add this in package.json 
    "engines": {
        "node" : "12.4.0",
        "npm" : "6.9.0"
    }
9. Remove yarn.lock
10. Push it on github
11. Now push it on heroku  by *git push heroku*
12. Go to link provided in step 7
13. Now add necessary data on server by postman.
14. Done