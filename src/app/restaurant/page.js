"use client"
import { useState } from "react"
import RestaurantLogin from "../_components/RestaurantLogin"
import RestaurantSignUp from "../_components/RestaurantSignUp"
import RestaurantHeader from "../_components/RestaurantHeader"
import './style.css'
import RestaurantFooter from "../_components/RestaurantFooter"

const Restaurant = () => {
    const [login, setLogin] = useState(true)
    return (
        <>
        <div className="container">
        <RestaurantHeader/>
            <h1> restaurant login and signup Page</h1>
            {
                login ? <RestaurantLogin /> : <RestaurantSignUp />
            }

            <div>
                <button className="button-link" onClick={() => setLogin(!login)}>
                    {login ? "create account" : "already have an account ? signup"}
                </button>
            </div>
        </div>
        <RestaurantFooter/>


        </>
    )
}


export default Restaurant