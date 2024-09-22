import { connectionStr } from "@/app/lib/db"
import { restaurantsSchema } from "@/app/lib/RestaurantsModal"
import { NextResponse } from "next/server"

export async function GET(){
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    const data = await restaurantsSchema.find()
    console.log(data);
    
    return NextResponse.json({result:true}) 
}