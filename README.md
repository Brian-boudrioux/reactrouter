# React + React router workshop

## Setup

clone the project and install dependencies :
    `cd reactrouter && npm i`

## Introduction 
We will use the cheapshark api to retrieve and show data about store and games deals, the api documentation : https://apidocs.cheapshark.com/#intro


## Step by step 

- 1/ Install react-router-dom
- 2/ Import the BrowserRouter, Routes, Route components into your Router component
- 3/ In your Router component add the following routes :
    - "/" who will render the Stores page
    - "/deals/:storeID" who will render the Deals page
- 4/ Import and use your Router component in your App, dont forget to add your Header & Footer components who should display on everypage
- 4.1/ In your Header components add a h1 to display the site title "GameDeals"
- 4.2/ In your Nav component, create nav item for each routes using the Link component, import your Nav into your Header component
- 5/ In Stores page, fetch the store endpoint of the api to display all the store name with her logo
- 6/ In Stores page, add a click event on a store to redirect to the route "/deals/:storeID" via the `useNavigate` hook, the storeID params should be remplaced with the id of the clicked store
- 7/ In Deals page, get the storeID params via the `useParams` hook and use it to fetch the api and display informations about deals
