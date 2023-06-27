import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



function NasaPage() {
    const navigate = useNavigate()
    const [img,setImg] = useState("");

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=5IIEafBwYkbHJWA4TNTU7Rzn0ccLE49eiK3ELzET")
        .then(result=> result.json())
        .then((data) => {setImg(data.url)
            console.log(data)
        })
    },[])
   

    return (
        <div>
            <h3>photo of the day: </h3>
            <br/>
            <img src={img} alt="nasa" class="avatar" />
            <br/>
            <button onClick={()=> {navigate("/")}}>logout</button>
        </div>
    )
}



export default NasaPage;