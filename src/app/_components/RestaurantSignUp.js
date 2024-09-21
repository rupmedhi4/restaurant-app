const restaurantSignUp = ()=>{
    return (
        < >
          <h3>Signup</h3>
            <div>
                <div className="input-wrapper">
                    <input type="text" placeholder="enter your email" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="enter your password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="enter your confirm password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="enter your restaurant name " className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="enter your city " className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="enter your Mobile number " className="input-field" />
                </div>
                <div className="input-wrapper">
                    <button className="button">SignUp</button>

                </div>
            </div>
        </>
    
    )
}

export default restaurantSignUp