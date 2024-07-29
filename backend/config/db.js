import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://sushrutshah138:projectsushrut138@fooddelivery.piigs2m.mongodb.net/?retryWrites=true&w=majority&appName=FoodDelivery/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.