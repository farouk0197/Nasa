import { useNavigate } from "react-router-dom";
import { useState } from "react";



function LandingPage() {
    const navigate = useNavigate()

    return (
        <div>



          
            <button onClick={()=> {navigate('register')}} type="submit">Signup</button>
            <button onClick={()=> {navigate('login')}} type="submit">Login</button>
            <button type="submit">Login with Google</button>
            



        </div>
    )
}



export default LandingPage;