const express           = require('express');
const chalk             = require('chalk');

const app               = express();
const port              = 3000;
const router = express.Router();

app.use(router);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const index = 'index.ejs';
const shop = 'shop.ejs';
const acc = 'account.ejs'

app.get('/', (req,res) => {
    res.render(index);
    logLoadPage(index);
    res.end();
});

app.get('/shop', (req,res) => {
    res.render(shop);
    logLoadPage(shop);
    res.end();
});

app.get('/acc', (req,res) => {
    res.render(acc);
    logLoadPage(acc);
    res.end();
});

app.listen(port, () => {
    console.log(`[👍] Correctly listening on port : ${port}`);
})

function logLoadPage(param) {
    return console.log(`[👍] Successfully loaded ` + chalk.green(`${param}`));
}