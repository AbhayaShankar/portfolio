---
title: "Stripe Payment Integration"
date: "2023-08-26"
slug: "stripe-payment-integration"
image: "stripe.png"
excerpt: "Stripe payment integration streamlines online transactions, offering secure and efficient payment processing for businesses, simplifying customer transactions."
isFeatured: true
isPublished: true
---

## 👋 Welcome to Stripe Integration

My name is Abhaya Shankar and I'll be guiding you for this short project.

## 📖 What You will be learning ?

1. How to Integrate Stripe Payment Gateway in your React Project.

## 🤏 Prerequisites

- If you have worked with javascript and React, then you will be good to go.
- Basic knowledge of Nodejs. (Beginners also can follow this)
- You need to have [Node](https://nodejs.org/en) installed.
- Make sure you install the dependent packages.
- And a cup of coffee. ☕

## ⚒️ What are we Building ?

We are building a simple project for Integrating Stripe into React Project for Payments.

Then We will Buy a Luffy gear 5 Bobblehead because I am an Anime nerd and a big fan of One Piece, you should try it too.

Well anyway, Hope you have your coffee. Take a sip of your coffee and let's build this.

## 🚀 Starting Off...

 For Stripe Payment Integration we require 2 basic things - a frontend where user can enter his card details and continue to pay and a backend where the validation checks and authentication is taken care of for smooth transaction process.


## 🔧 Basic Frontend Setup

- FRONTEND : CRA Template  

```bash
  npx create-react-app frontend
```

  Let this install all the dependencies and create a basic CRA template. This will take 15-30 sec of time depending upon your processor and network speed, it might take more. So wait till these gets installed and in the meanwhile lets proceed with the backend setup as well.

## 🔧 Basic Backend Setup

- BACKEND - Setup

``` bash
mkdir backend
cd backend
npm init -y
```

First create a backend folder where in we will write all the logic for our backend. Move into the folder and then run the `npm init -y` command. This will install a `package.json` file into backend folder.
Now once you are done with all this, lets also install the packages which we will be using for this project.

1. cors
2. express
3. stripe
4. uuid
5. nodemon
6. dotenv

To install these packages run the following command

```bash
npm i cors express stripe uuid nodemon dotenv
```

This will take hardly 30-40 secs to install and once done you should have `package.json` file looking like this.

```js
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "nodemon": "^3.0.1",
    "stripe": "^13.2.0",
    "uuid": "^9.0.0"
  }
}
```

The package version may vary depending upon the latest release, but if you are having versions above these, you dont need to stress over this.

Let's understand why exactly do we require these packages.
- Cors - used for cross origin resource sharing with which a front-end client can make requests for resources to an external back-end server. The single-origin policy does not allow cross-origin requests and CORS headers are required to bypass this feature. To learn more about this, you can head over [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

- Express - additional package built on top of node which makes our life easier. Listening to the server. To deep dive into Expressjs, you can also recommend the [documentation](https://expressjs.com/en/starter/installing.html) or this [blog](https://vegibit.com/node-js-blog-tutorial/).

- Stripe - for Stripe Payment integration. Refer [docs](https://stripe.com/docs) for more info.

- uuid - It is used for generating a unique id for each request, so that we can ensure for every transaction request we are generating a payment flow.

- nodemon - It is a package which re-spins the server if any changes are made to the project and saved. Not a required package but it makes our life easier. You can install this package as a dev dependecy also if you dont want this to publish in the production. Here's how you can do this - run the `npm i --save-dev nodemon`.

- dotenv - This package helps us to configure and use env variables inside our project to safeguard our private keys and values.


Now once the Basic setup is clear, you just wanna change a script in `package.json` file and we will good to go.

You  wanna delete this **script** 

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

and add the following **script** in the `package.json` file

```js
"scripts": {
    "start": "nodemon index.js"
  },
```

One final thing to do before we start implementing our backend logic. Create a `.gitignore` file inside both **Backend** root folder and **Frontend** root folder and add these below code inside them both.

```js
/node_modules
/.env
```

This will ensure that when you will be publishing your project to maybe your github repo or while deployment, items inside .gitignore will be ignored and will not be accessible to other people. This is crucial as you don't want your secret keys being open to other developers and also you don't want to push your node_modules to your github repo as well.

Well Kudos! You successfully created the backend setup for this project. Give yourself a pat on the back, and lets move forward with the backend logic.

After setting up your frotend and backend, you should be ready with something like this...

![Project Setup](/blogs/stripe-payment-integration/setup.png)

## 🧠 Backend Logic

Once the basic setup is done, now we wanna setup routes and logic for the backend. Moving on with the basic setup for `index.js` file : 

Note : you can call this whatever you want. Most prefer this to call `server.js`, but you can call this anything.

```js
const cors = require("cors");
const express = require("express");

// TODO: Add the pub key to configure the stripe
const stripe = require("stripe")("");
const { v4: uuidv4 } = require("uuid");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("IT WORKS...");
});

//Listen
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server listening on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
```

Here we initialised the cors, express, uuid and stripe. Then we setup a middleware `app.use(cors())` for cross-origin resource sharing. Then we setup a basic get route to home screen and we send the response **IT WORKS** which is then displayed on the home page of the PORT 5000.

We cheated our way to send the response using `res.send()`, which we ideally don't use. Instead you could also send a proper response something like this :

```js
app.get("/" , (req, res) => {
  res.status(200).json({success : true, msg: "IT WORKS"});
})
```


```js
// index.js

const cors = require("cors");
const express = require("express");

// TODO: Add the pub key to configure the stripe
const stripe = require("stripe")("");
const { v4: uuidv4 } = require("uuid");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("IT WORKS...");
});

//Listen
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server listening on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
```

Copy paste the file into `index.js` and then spin the server by running the command 
```bash 
npm start
```

This will spin up the server, open up the console and if you can see `Server is running on  port 5000` , go to `http://localhost:5000/` and if you see **IT WORKS** displayed on the screen, well you did it, You created a basic route in Express. If in case you are getting any errors, please troubleshoot. Make sure you are in the backend dir when you run `npm start`.

Now inorder to use Stripe, you need to first create an account on [Stripe](https://dashboard.stripe.com/register). If you have an account already then you can login and access the stripe dashboard which will look something like this.

![Stripe Dashboard](/blogs/stripe-payment-integration/dashboard.png)

Now once you have successfully created an account, move into **Developers** tab and look for two things mainly -
- Publishable Key
- Secret Key

![Secret Keys](/blogs/stripe-payment-integration/secretKeys.png)

Take these two values and save this somewhere safe and we will use these later in the `index.js` backend setup. Make sure you don't share these keys specially the secret keys as this would lead to security issue for your configuration.

Now move back into your **Backend** folder where we have just created our basic route. There you want to add a function at the very top of the `index.js` file.

```js
require("dotenv").config();
```

This bit of code will enable us to access our `.env` variables in our project so as to keep our secret keys as a secret.
Create a new file inside the **Backend** folder and name it `.env` like this : 

![Secret Keys](/blogs/stripe-payment-integration/env.png)

Copy your secret key from Stripe Developers dashboard and paste it inside the .env variable just like in the above presented example.

Remember - **Secret_Key** goes into *Backend* `.env` and **Publishable_Key** goes into *Frontend* `.env`. You can access these variables using `process.env.[Your_secret_key]`.

Add secret key inside your stripe variable in `index.js` file.

```js
const stripe = require("stripe")(process.env.STRIPE_KEY);
```

Once this setup is done, let's proceed forward.

📮 Adding a POST Route

Now we wanna create a post route which we will hit from the frontend in which we will create customer from stripe and create a charge for the customer.

Let's start with the basic setup then we will add up more functions as we proceed forward.

```js
app.get("/payment" , async (req, res) => {
  try{
    // Our Logic Here...
    res.status(201).json({msg : "Success"})
  }catch(err){
    console.log(err)
  }
})
```
Now this is a very basic setup for a post route where we will add our logic in the try block. So without wasting any time, let's move forward with this.

1. First we want to destructure `product` and `token` which we will be getting from our frontend. Then you can check whether or not you are getting the value or not, but wait till we actually setup our frontend. 
   
2. Then we will create an **idemPotencyKey** which ensures that transaction for a particular bill is generated only once and we don't generate different bill for the same request.
   
3. Then we will create a customer using Stripe. Now this will return a promise so we will use **Async/Await**. If you are not familiar with async/await you can look up to this documentation of [Javascript.info](https://javascript.info/async).
    
4. This create customer  will take in few values where we will pass on the email and source which we will getting from our token. Once this is complete we will get back our customer.
   
5. Once our customer is ready, we can add a charge on the purchase. This will also return a promise, so will use `await` again. This will also take in some values where **first** one is the options which we wanna extract out of which few are compulsory like `amount` , `currency`, `customer` and the **second** one is our `idemPotencyKey`

```js
const charge = await stripe.charges.create({options} , {idempotencyKey})
```

Add the following code block into our post route, which I will explain you each and every step of configuration.

```js
app.post("/payment", async (req, res) => {
  const { product, token } = req.body;

  // Check whether we are getting value or not.
  console.log("Product", product);
  console.log("Price", product.price);

  // Special key for ensuring a user is charged only once for his/her products.
  const idemPotencyKey = uuidv4();

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const charge = await stripe.charges.create(
      {
        // Multiply by 100 because stripe takes in cent as default value and we want to have in dollars.
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchase of ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            country: token.card.address_country,
          },
        },
      },
      { idemPotencyKey }
    );

    res.status(200).json(charge);
  } catch (err) {
    console.log(err);
  }
});
```

Well that's basically all we had to do for our Backend setup. Although it's quite basic, as you dive deep into this, you will get to know a lot more and crucial todos and not-todos but we are good for now. Now let's jump back to our Frontend.

## 🐬 Diving into Frontend

Frontend is all about appealing to the eye, but at the same time where users can get easy access and smooth experience. We are not going to build a full stack E-commerce app or something, just the important part of how to use stripe as a payment. So, we will be starting off with quite simple.

Let's move back into our **Frontend** folder and there first we wanna do is some basic cleanups. We will be removing files and content which is not important for our project. Although it's not like the end of the world but its good to remove fies and stuff which unnecessarily takes up your space. If you have worked with **CRA Template** you must be quite familiar to this process.

Removing content inside `App.js`, `reportWebVitals.js`, `setupTests.js` etc. But I am not gonna do all that. We will proceed with the Logic in Frontend not the Stylings and stuffs which I am guessing you are capable of. You can find the **source code** [here](https://github.com/AbhayaShankar/Stripe/tree/main/frontend) if you have any doubt or feel stuck somewhere.

Now before proceeding forward we will install two more dependencies into our frontend project.
1. [react-stripe-checkout](https://www.npmjs.com/package/react-stripe-checkout)
2. **CDN** for `MaterializeCSS`. 

Open the terminal, make sure you are inside the frontend directory and then run the following command to install `react-stripe-checkout`.

```bash
npm i react-stripe-checkout
```

After that add this `<Link>` inside the `index.html` in Public folder of frontend.

```html
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
/>
```

Add the necessary import statements and then we will create a state for our product. Ideally this will be dynamic but we are hardcoding this for now.

```js
import React, { useState } from "react";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";
import cover from "./cover.webp";


function App() {
  const [product, setProduct] = useState({
    name: "Luffy gear 5 Bobblehead",
    price: 35,
    productBy: "Abhaya++",
  });

  return (
    <div className="App">
      <p>Luffy Gear 5</p>
      <img src={cover} alt="cover-img" />
      <span>{product.name}</span>
    </div>
  );
}

export default App;
```

Now For the main part - Incorporating Stripe in our Frontend where we will pass our taken value which will be accessible in our backend as well. We will be using the **StripeCheckout** which will take in a few values where two are compulsory `stripeKey` and `token` and this has to named as mentioned. You can [refer](https://www.npmjs.com/package/react-stripe-checkout) the docs.

Let's create a function **makePayment** which will send response to our backend with our token and product details. Backend will then create a charge for the Customer and once validated everything will send back a response to our frontend saying that payment is successful.

```js
function App() {

// ... our product state

  const makePayment = async (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch("http://localhost:5000/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    // Display data for checking
    console.log(data);
  };

  return (
    <div className="App">
      <p>Luffy Gear 5</p>
      <img src={cover} alt="cover-img" />
      <span>{product.name}</span>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_KEY}
        token={makePayment}
        name="Buy Bobblehead"
      >
        <button className="btn-large red darken-4"> Buy BobbleHead Now</button>
      </StripeCheckout>
    </div>
  );
}

export default App;
```
We could use these className only because we have added the cdn link of materialize css into out project.

```js
const makePayment = async (token) => {
    const body = {
      token,
      product,
    };
```
In this bit of code, you might be wondering where is this `token` coming from. Actually this token is automatically created for you by `StrikeCheckout`, you just need to ensure that your prop containing token is actually named as **token** and that's it.

Then in that we create a body containing our token and product details, configure headers as `"Content-Type": "application/json"` and then the main part where we send a fetch request to our backend server and getting the response. Then we `await` response and we get back the data.

Once everything in the frontend is done, you can spin-up the frontend project by going to terminal and running `npm start` command. make sure you are in the frontend directory while running the command or else you will get some fat error. You can visit `http://localhost:3000`, you should get this on the home screen.

![Frontend View](/blogs/stripe-payment-integration/frontend.png)

One more thing you should remember that both our frontend and backend should be up and running. We have not deployed our app so its not active. Until it's running, we will not get success payment transaction.

Click on the **Buy Bobblehead Now** 

![Test Mode](/blogs/stripe-payment-integration/test.png)

You can add any dummy email and Card Number in the **Test Mode** is 4242424242424242 and you can add any dummy cvv and exp date as well and then proceed to pay.

![Dummy Values](/blogs/stripe-payment-integration/dummy.png)

![Payment Success](/blogs/stripe-payment-integration/paymentSuccess.png)

If you are getting some errors in the console, please **Troubleshoot**.

## 🤩 Congrats! You did it

Great! You have successfully completed this project.
You deserve a toast 🥂. Now you can proceed with some new ideas.
If you have been following up and have created something, make sure to showcase your project connect with me on [LinkedIn](https://www.linkedin.com/in/abhayashankar/).