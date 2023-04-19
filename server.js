require("dotenv").config();
const express = require('express')
const connectToDB = require("./config/db");
const Pokemon = require('./models/PokeSchema');
const mongoose = require('mongoose');
const React = require('react');

const app = express()
const PORT = 3000

//=============Configuring Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

/**
 * Middlewares
 */
app.use((req, res, next) => {
    console.log('I run on all routes!');
    next();
    
});
// Parsing incoming data from request
// app.use(bodyparser.json());
app.use(express.urlencoded({extended: false}));


// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!')
})

// Index Route
app.get('/pokemon', async (req, res) => {
    const allPokemon = await Pokemon.find();
    res.render('Index', {pokemon: allPokemon});
});

// Show Route
app.get('/pokemon/:id', async (req, res) => {
    const foundPoke = await Pokemon.findById(req.params.id);
    res.render('Show', { pokemon: foundPoke });
  });




app.listen(port, () => {
    console.log(`Whose that Pokemon ${port}`);
    connectToDB();
  });