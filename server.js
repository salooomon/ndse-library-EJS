const express = require('express');
const indexRouter = require('./routes/index');
const bookRouter = require('./routes/books');
const error  = require('./middleware/error')
const logger = require('./middleware/logger');

const app = express();

app.use(express.urlencoded())
app.set("view engine","ejs")

app.use(logger);
app.use('/', indexRouter);
app.use('/books', bookRouter);
app.use(error);

const PORT = process.env.PORT || 8080
app.listen(PORT);