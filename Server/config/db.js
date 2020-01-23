const moongoose = require('mongoose');
const keys = require('./keys');

const connectDB = async () => {
    try {
        const conn = await moongoose.connect(keys.mongoURI, {
            useNewUrlParser:true ,
            useCreateIndex:true,
            useFindAndModify:false, 
            useUnifiedTopology:true
        });
        console.log('Mongo Connect Success');
    } catch (err) {
        console.log('${err.message}');
    }
}

module.exports = connectDB;