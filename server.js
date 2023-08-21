const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const movieRouter = require('./router/movieRoutes');
const directorRouter = require('./router/directorRoutes');
const auth = require('./middlewares/auth');
const dbConnect = require('./database/db');

app.use(express.json());

dbConnect();

app.use(auth);

app.use('/api', movieRouter);

app.use('/api', directorRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port http://localhost:${process.env.PORT || 3000}/api/movies`);
});



