const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Index Route
app.get('/', (req,res) => {
    const title = 'Welcommme';
    
    res.render('index', {
        title: title 
    });
});
//About route
app.get('/about', (req,res)=>{
res.render('about')
})

const port = 5001;

app.listen(port,() => {
    console.log(`Server started on port ${port}`)
});