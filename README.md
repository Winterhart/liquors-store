# Liquors-Store

Based on coding challenge, Liquors Store Catalog.
A front-end application with React, Typescript and NodeJS made to display wine, beer and other brevages. 
One of my goal is to build a product fully responsive and usable on mobiles.

## Demo

The website is available at: https://liquors-store.appspot.com/

### PC 

![alt text](https://github.com/Winterhart/liquors-store/blob/master/docs/LiquorsPC.gif "store")


**flow:**
- Navigate to home page
- Check the two panel Advance Search, Regular Search
- First Search 'biere' in Advance Search panel
- Add criteria from: 'Belgique'
- Verify its from the right country
- Add criteria load: '50'
- Navigate through results


### Mobile
![alt text](https://github.com/Winterhart/liquors-store/blob/master/docs/mobile2.gif "store")


**flow:**
- Navigate to home page
- Remove old query 'champagne'
- Search for 'vino'
- Navigate to *details*, click on *details*
- Navigate to *productor details*, click on *productor details*


## DEV

First, make sure to get a token to use coveo Rest API with SAQ data bank.
Also, make sure to have NodeJs install on your machine.

**Coming soon:** Dockerfile

#### Getting Started

The no-docker way

```
> git clone https://github.com/Winterhart/liquors-store/
> cd liquors
> npm install
> npm test
> REACT_APP_API_TOKEN=XXXX-XXXX-XXXX npm run start

```

### Run Test

To run the test

`>npm test`

## Software Architecture

- application: all UI, components, page, props and states
- assets: all assets, CSS and image...
- domain: data models and data adapter
- data-source: all transaction with back-end finder, TDG


## Next Feature

- Query Builder for data-source and finders
- Load more button
- Load with/without images
- Pagination and next/previous page
- Sort Panel let's sort by price, score...
- Automatic error correction based on API tool recommendation




