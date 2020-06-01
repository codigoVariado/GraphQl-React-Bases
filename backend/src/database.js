import mongoose from 'mongoose'

const uri = 'mongodb://localhost/graphqlReactDb';
const db = mongoose.connection;

mongoose.connect(uri , {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex : true
     } )
     .catch( err => console.log(err))

     db.once('open', _ => {
         console.log('DataBase is connected to', uri )
     });

     db.on('error', (err) => {
         console.log(err)
     })