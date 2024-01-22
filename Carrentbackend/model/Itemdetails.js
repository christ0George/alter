const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ponappa001:ponappan@cluster0.yxpykam.mongodb.net/rentalcar?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let it=mongoose.Schema;
const carschema=new it(
    {
        carid:Number,
        company:String,
        model:String,
        no:String,
        // color:String,
        // fuel:String,
        // amount:Number,
        // description:String,
       
        //  photo:{
        //     data:Buffer,
        //     contentType:String,
        // },
        // RC:{
        //     data:Buffer,
        //     contentType:String,
        // }
    }
);
var carmodel=mongoose.model("car",carschema)
module.exports=carmodel;