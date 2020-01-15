const express = require ('express');
const mongoose = require('mongoose');
const keys = require('./config/keys'); 
require('./modules/User');
require ('./services/passport');

mongoose.connect('mongodb+srv://emailyuser:<vf5NeKveqVw6Begk>@emaily-xdkcm.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true},{useUnifiedTopology: true});

const app = express ();

require ('./routes/authRoutes') (app);

const PORT = process.env.PORT || 5000;
app.listen (PORT);