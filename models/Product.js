const { default: mongoose } = require("mongoose");



// Schema Design

const productsSchema = mongoose.Schema({
    name:{
     type: String,
     required: [true, "Please provide a name for this porduct"],
     trim: true, //If space is given two or more to write the product name then it will trim auto;
     unique: [true, "Name must be unique"],
     minLength: [3, "Name must be 3 characters"],
     maxLength: [100, "Name is too large"]
    },
    description: {
     type: String,
     required: true
    },
    price: {
     type: Number,
     required: true,
     min: [0, "Price can't be negative"]
    },
    unit: {
     type: String,
     required: true,
     enum: {
         values: ["kg", "litre", "pcs"],
         message: ["unit value can't be ${VALUE}, Must be kg/litre/pcs"]
     }
    },
    quantity: {
     type: Number,
     required: true,
     min: [0, "quantity can't be negative"],
     validate : {
         validator: (value)=>{
             const isInteger = Number.isInteger(value);
             if(isInteger){
                 return true
             }
             else{
                 return false
             }
         }
     },
     message: "Quantity must be an integer"
    },
    status: {
     type: String,
     required: true,
     enum: {
         values: ["In-stock", "Out-of-stock", "discontinued"],
         message: "Status can't be {VALUE}"
     }
    },
 //    supplier: {
 //     type: mongoose.Schema.Types.ObjectId,
 //     ref: "Supplier"
 //    },
 //    categories: [{
 //     name: {
 //         type: String,
 //         required: true
 //     },
 //     _id: mongoose.Schema.Types.ObjectId
 //    }]
 },
 {
     timestamps: true
 });
 
 
 // Middleware pre and post
 
 productsSchema.pre('save', function(next){
     console.log('Before save data');
 
     //this ==>
     if(this.quantity === 0){
         this.status = "out-of-stock"
     }
     next()
 })
 
 productsSchema.post('save', function(doc, next){
     console.log('After save data');
 
     next()
 })
 
 
 // Instance Method
 
 productsSchema.methods.logger = function(){
     console.log(`data saved for ${this.name}`);
 }
 
 // Design Model
 
 const Product = mongoose.model('Product', productsSchema)
 
 module.exports = Product