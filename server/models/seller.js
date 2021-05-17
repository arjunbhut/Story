import mongoose from 'mongoose';

const sellerSchema = mongoose.Schema({
    name: String,
    email: String,
    number: String,
    address: String,
    pincode: String,
    type: String,
})

const Seller = mongoose.model('Seller', sellerSchema);

export default Seller;