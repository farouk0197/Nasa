import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



function NasaPage() {
    const navigate = useNavigate()
    const [img,setImg] = useState("");
    const handelFetch = () => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=5IIEafBwYkbHJWA4TNTU7Rzn0ccLE49eiK3ELzET")
        .then(result=> result.json())
        .then(data => setImg(data.url))
    }
    handelFetch();

    return (
        <div>
            your photo of the day: 

            <img src={img} alt="Avatar" class="avatar" />
            <button onClick={()=> {navigate("/")}}>logout</button>
        </div>
    )
}



export default NasaPage;