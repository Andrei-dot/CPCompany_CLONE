const express           = require('express');
const chalk             = require('chalk');

const app               = express();
const port              = 3000;
const router = express.Router();

app.use(router);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const index = 'index.ejs';
const account = 'account.ejs';
const shop = 'shop.ejs';
const wishlist = 'wishlist.ejs';
const register = 'register.ejs';

app.get('/', (req,res) => {
    res.render(index);
    logLoadPage(index);
    res.end();
});

app.get('/acc', (req,res) => {
    res.render(account);
    logLoadPage(account);
    res.end();
});

app.get('/shop', (req,res) => {
    res.render(shop);
    logLoadPage(shop);
    res.end();
});

app.get('/register', (req,res) => {
    res.render(register);
    logLoadPage(register);
    res.end();
});

/* app.post('/register', urlEncoder, function(req,res) {
    const data = req.body;
    con.connect(function(err) {
        if(err) throw err;
        console.log("[!] Connection établie avec DDB.")

            if(data.mail == data.mailConfirm) {
                if(data.password == data.passwordConfirm) {
                    var query = con.query(`INSERT INTO users(userId,username,mail,mailConfirm,password,passwordConfirm) VALUES ('0',' ` + data.username + `','` + data.mail + `','` + data.mailConfirm + `','` + data.pwd + `','` + data.pwdConfirm + `');`, function(err,rows) {
                        if(err) { console.error(err); }
                    });            
                } else {
                    res.statusMessage = "Current password does not match";
                    res.status(400).end();        
                }
            } else {
                console.log("Mail!");
            }
    });
    res.render("index.ejs");
    res.end();
}); */


app.get('/wishlist', (req,res) => {
    res.render(wishlist);
    logLoadPage(wishlist);
    res.end();
});


app.listen(port, () => {
    console.log(`[👍] Correctly listening on port : ${port}`);
})

function logLoadPage(param) {
    return console.log(`[👍] Successfully loaded ` + chalk.green(`${param}`));
}
