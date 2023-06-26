import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



function RegisterPage() {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    const handleUsername = (e) => {
        setUsername(e.target.value)
        
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        
    }



    

    const handleSignUpButton = (e) => {
        e.preventDefault();
        let raw = JSON.stringify({
            "username": username,
            "password": password
        })
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: raw
        };
        fetch(`http://localhost:3001/register`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("You've succesfully made an account");
                navigate("/login")
        
            })
            .catch(error => console.log('error', error));
        

    }

    return (
        <div>



            <label for="uname"><b>Username</b></label>
            <input type="text" value= {username}   onChange ={handleUsername} placeholder="Enter Username" name="uname" required />

            <label for="psw"><b>Password</b></label>
            <input type="password"  value= {password}  onChange ={handlePassword} placeholder="Enter Password" name="psw" required />

            <button type="submit" onClick={handleSignUpButton}>Signup</button>
          



        </div>
    )
}



export default RegisterPage;