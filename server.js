const express = require('express');
const app = express();
const ejs = require('ejs')
const port = 3001;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const viewPath = path.join(__dirname, './views')
    //view engine to EJS


// Serve static files from the 'public' folder
app.use(express.static('public'));
// app.use('/css', express.static(__dirname, './public/stylesheets/style'))

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set("views", viewPath);
//  routes

app.get('', function(req, res) {
    const title = 'My Website'; // Define the title variable
    res.render('index', { title: title }); // Pass the title variable to the template
});



app.get('/about', function(req, res) {
    const title = 'About Me'; // Define the title variable
    res.render('about', { title: title }); // Pass the title variable to the template
});



app.get('/services', function(req, res) {
    const title = 'Services'; // Define the title variable
    res.render('services', { title: title }); // Pass the title variable to the template
});



app.get('/projects', function(req, res) {
    const title = 'Projects'; // Define the title variable
    res.render('projects', { title: title }); // Pass the title variable to the template
});



app.get('/contact', function(req, res) {
    const title = 'Contact'; // Define the title variable
    res.render('contact', { title: title }); // Pass the title variable to the template
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});