// Charger .env EN PREMIER
require('dotenv').config();
   const cors = require('cors');
const express = require("express");
const connectDB = require("./ConnexionDB/connexionDB.js");
  
// Connexion DB
connectDB();

// Initialiser Express
const app = express();
 app.use(cors());
// Récupérer le port
const port = process.env.PORT || 3000;



// Routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./Routes/indexRoute.js'));
app.use('/admin', require('./Routes/adminsRoute.js'))
// Démarrer le serveur
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});