const mongoose =require("mongoose");

const itemSchema =new mongoose.Schema({
    name:{type:string,required:true},
    quantity:{type:Number,required:true},
    unitPrice:{type:Number, required:true},
    taxtPercent:{type:Number,default:0},
    total:{type:Number,required:true},
});

const invoiceSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    invoiceNumber:{
        type:String,
        required:true,
    },
    invoiceDte:{
        type:Data,
        default:Date.now,
    },
    dueDate:{
        type:Date,
    },
    billFrom:{
        businessName:String,
        email:string,
        address:String,
        phone:String,
    },
    item:[itemSchema],
    notes:{
        type:String,
    },
    paymentTerms:{
        type:String,
        default:"Net 15",
    },
    status:{
        type:string,
        enum:["paid","Unpaid"],
        default:"Unpaid",

    },
    subtotal: Number,
    taxtTotal: Number,
    total: Number,
},
    {timestamps:true}
);

module.exports = mongoose.model("Invoice", invoiseSchema);