const express =  require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
var corsOptions = {
    origin: "http://localhost:4200"
}

app.use(cors(corsOptions)); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.json({message: 'Hello world!!'});
});

require("./routes/user.routes")(app);
require('./routes/maboneng.routes')(app);
require('./routes/cart.routes')(app);
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`app listening on port ${PORT} :)`);
});

