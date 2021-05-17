import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
    name:String,
    email: String,
    password: String 
})

export default mongoose.model('Customer',customerSchema);
