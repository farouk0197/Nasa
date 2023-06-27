import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';


function LandingPage() {
    const navigate = useNavigate()
    const responseMessage = (response) => {
        console.log(response);
        navigate('/nasa')
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>



          
            <button onClick={()=> {navigate('register')}} type="submit">Signup</button>
            <button onClick={()=> {navigate('login')}} type="submit">Login</button>
            <br/>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
            



        </div>
    )
}



export default LandingPage;