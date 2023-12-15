const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes')


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://mjordanpascual:FGRcaKmOh9QH41yO@wdc028-course-booking.sbuuomu.mongodb.net/tito_ospar1?retryWrites=true&w=majority");

mongoose.connection.once('open', () => console.log('Now Connected to MongoDB!'))

// app.get('/', (req, res) => {
//     res.send('Kylj Pascual');
// });

app.use('/users', userRoutes );

app.listen(process.env.PORT || 4000, () => {
    console.log(`API Server is now online on port: ${process.env.PORT || 4000}`);
});