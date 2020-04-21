# Crypto-Tracker

## Overview


This was a solo project assigned as a final project in Mod 3 during my time at Turing.  We were tasked with finding an API to work with, and using that data to build an application that puts the data to good use.  I decided on a crypto-currency API and with that, this application first presents the user with a welcome card that provides a general overview of all crypto markets combined.  

![Homepage](https://user-images.githubusercontent.com/51523262/79828906-00fe0280-835f-11ea-9371-8ff836421eb6.png)


From here, the user can click the button at the bottom and it will bring them to a display of the top 100 ranked cryptos on the Binance exchange.  Here the user can update the data, sort the table by many options, or view a more detailed description of a crypto.

![Cryptos](https://user-images.githubusercontent.com/51523262/79828910-03605c80-835f-11ea-8d9d-520890e52681.png)


After clicking on a cryptos view details button, the user is brought to a page which presents a m uch more detailed display of the statistics of that crypto.  The user can add this crypto to their favorites, which persists on page reload or new sessions.  Users can also compare the trade of this crypto across up to 50 exchanges.

![Detailed](https://user-images.githubusercontent.com/51523262/79829250-c47ed680-835f-11ea-8c44-3a2a24423760.png)


From the exchanges table, the user can see where that crypto is least expensive to purchase or best price to sell.  They can also see the volume of trade involving that crypto and various exchanges.  This data can be sorted according to any of these options.

![Exchanges](https://user-images.githubusercontent.com/51523262/79828922-08251080-835f-11ea-9bee-48188a39f6d8.png)


Lastly, the user can view all of their favorited cryptos to get a quick glimpse into how they are performing.  They can remove any card from their favorites or view the extended details data of each crypto.

![Favorites](https://user-images.githubusercontent.com/51523262/79828924-09563d80-835f-11ea-8cee-b0354fed0aa8.png)


## Technologies Used

- React
- React Router
- Redux
- Jest
- React-Redux Testing Libraries
- Webpack
- Asynchronous Javascript Functionality

## Set Up

To copy the project to your computer and run it: 

1. Clone down the repo using `git clone`
2. Navigate into the cloned directory
3. Run `npm install`
4. Run `npm start` to host a local server
5. Your terminal should automatically navigate to [http://localhost:3000/](http://localhost:3000/), otherwise you can type it in your browser to view it.
6. From here you can navigate through the application