const { default: mongoose } = require("mongoose")

const  RestaurantsModal=new mongoose.Schema({
    name:String
})


export const restaurantsSchema = mongoose.models.restaurants || mongoose.model("restaurants",RestaurantsModal)