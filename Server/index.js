const express = require ('express');
const mongoose = require('mongoose');
const keys = require('./config/keys'); 
const db = require('./config/db');
require('./modules/User');
require ('./services/passport');

db();

const app = express ();

require ('./routes/authRoutes') (app);

const PORT = process.env.PORT || 5000;
app.listen (PORT);