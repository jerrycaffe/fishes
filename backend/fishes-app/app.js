const express = require('express');
// require('custom-env').env()
const app = express();
const fishesRoutes = require("./routes/fishes");
const morgan = require('morgan');
const cors = require('cors');
// const bodyParser = require('body-parser');


app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(morgan('tiny'));

app.use("/fishes", fishesRoutes);


app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

app.listen(3000, function() {
  console.log("Server starting on port 3000!");
});
