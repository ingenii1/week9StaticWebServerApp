//SERVER FILE//

//packages & port//
require("./db/connection");
const express = require("express");//link with the express node package// 
const movieRouter = require("./movies/movieRoutes");
const app = express();//app name//
// env var set up for cloud hosting at a later date
const port = process.env.PORT || 5001;//port is going to be used//
//const port = 5001;//port is going to be used//

app.use(express.json());

app.use("/home", express.static("public"));
app.use(movieRouter);
//"static" is our route path, "public" is our folder where our static files live//
//app.use("/static", express.static("public")); //route file//


// run the express application with this function//
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});