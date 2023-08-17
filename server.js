const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const movieRouter = require('./router/routes');
const auth = require('./middlewares/auth');

app.use(express.json());

app.use(auth);

app.use('/api', movieRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port http://localhost:${process.env.PORT || 3000}/api/movies`);
});


