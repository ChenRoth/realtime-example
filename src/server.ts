import express from 'express';
import cors from 'cors';
import expressJwt from 'express-jwt';
const PORT = 4000;

const {JWT_SECRET = 'secret'} = process.env;

const app = express();

app.use(cors());
// comment out this line if you want to bypass JWT check during development
app.use(expressJwt({secret: JWT_SECRET}).unless({path: '/'}));

app.get('/', (req, res) => {
    res.send('Hi there!');
})

app.listen(PORT, () => console.log(`Server is up at ${PORT}`));