const mongoose =require('mongoose');
// const dbURI = 'mongodb://jellysince1:jellybean@0.0.0.0/0:27017/Cluster0';

const connectDB = async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI,{ });

        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();

    }
};

module.exports =connectDB;