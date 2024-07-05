## Currency Converter Application

___


### Technologies Used
+ [React.js](https://react.dev/) for the frontend
+ [Node.js](https://nodejs.org/en) and [Express.js](https://expressjs.com/) for the backend API
+ [MongoDB](https://www.mongodb.com/) Atlas for database storage
+ [ExchangeRate-API](https://www.exchangerate-api.com/docs/free) for currency conversion rates
+ [Material UI](https://mui.com/material-ui/) for styling

___

![Screenshot 2024-07-05 095311](https://github.com/pasanchamikara99/Fund-transfer/assets/75413812/96422b8f-1519-4dc4-a62f-f60776f4a8a5)
___


### Project Structure

    currency-converter/
    │
    ├── frontend/       (React.js frontend)
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── App.js
    │   │   └── ...
    │   ├── package.json
    │   └── ...
    |   └── .env
    │
    ├── backend/        (Node.js/Express.js backend)
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── app.js
    │   ├── package.json
    │   └── ...
    |   └── .env
    │
    └── README.md

___

 
### Step-by-Step Run Instructions

#### Clone the repository:

    git clone https://github.com/pasanchamikara99/Fund-transfer.git
    cd Fund-transfer

#### Setup Backend:
    cd backEnd
    npm install

#### Configure Environment Variables:
    MONGODB_URI=your_mongodb_atlas_uri

#### Run Backend
    npm run dev

#### Setup Frontend
##### Open a new terminal window/tab.
     cd ../frontEnd
     npm install

#### Configure Environment Variables
     VITE_APP_API_URL=https://v6.exchangerateapi.com/v6/62fc183431e2f440839449bc/latest/

#### Run Frontend
     npm run dev
  

