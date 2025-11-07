// Charger .env EN PREMIER
require('dotenv').config();
   const cors = require('cors');
const express = require("express");
const connectDB = require("./ConnexionDB/connexionDB.js");
  const multer = require('multer');

const path = require('path');
const fs = require('fs');
// Connexion DB
connectDB();
// Configuration du stockage

// Filtrage des types de fichiers




const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('📁 Dossier uploads créé:', uploadsDir);
}


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