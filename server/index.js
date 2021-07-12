import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

// connecting to the database mongodb
const app= express();

app.use(bodyParser.json({ limit: '38mb', extended: true}));
app.use(bodyParser.urlencoded({ limit: '38mb', extended: true}));
 app.use(cors());
 
 app.use('/posts',postRoutes);

 const CONNECTION_URL="mongodb+srv://OUSS:OUSS@cluster0.htusw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 const PORT= process.env.PORT || 5000;
 mongoose.connect(CONNECTION_URL, {
     useNewUrlParser: true, useUnifiedTopology: true
 }).then(()=> app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
 .catch((error)=> console.log(error.message));

 mongoose.set('useFindAndModify',false);

// working with routes

