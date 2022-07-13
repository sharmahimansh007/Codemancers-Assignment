import React from "react";
import "./Message.css";
import home from './icons/home.png';
import user from "./icons/user.png";
import tv from "./icons/series.png";
import shop from "./icons/shop.png";
import { Giphy } from "../Gif/Gif";


export const MessagePost = () => {
    const [Data, setData] = React.useState("");
    const [value, setValue] = React.useState(0);


    return(
        <div>
            <div className="header">

                <img className="logo" width={"50px"} src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt="" />

                <div className="icons">
                    <img  src={home} alt="home" />
                <img src={user} alt="user" />
                    <img src={tv} alt="tv" />
                    <img src={shop} alt="shop" />
                </div>
            </div >

            <div className="Post-body">
                <div className="input">
                    
                    <img width={"40px"} src="https://www.pngmart.com/files/21/Account-User-PNG-Photo.png" alt="" />
                <input className="inputBox"  type="text" placeholder="What's on your mind."/>

                </div> 
                <div className="myGif">
                    {Data ? <img width={"60%"}  src={Data} alt="" /> : ""}
                </div>
                <div >
                    {value ? <Giphy Data={setData} /> : null}
                    
                </div>
                
                <div className="messageOptions">
                    <div  className="otherIcon">
                    <img src="https://cdn-icons.flaticon.com/png/512/3172/premium/3172569.png?token=exp=1657723166~hmac=1fea89f2d4ef24a6e07bc5c270dc16a4" alt="Live Video" /> 
                    <p>Live Video</p>
                    </div>

                    <div  className="otherIcon">
                    <img src="https://cdn-icons-png.flaticon.com/512/1829/1829646.png" alt="Photo" /> 
                    <p>Photo/Video</p>
                    </div>

                    <div onClick={() => {setValue(1)}}  className="otherIcon">
                    <img src="https://cdn-icons.flaticon.com/png/512/5362/premium/5362497.png?token=exp=1657724082~hmac=050ff87ca0a09d17357424ed91b29490" alt="gif" /> 
                    <p>Gif</p>

                    </div>
                    
                </div>

                
            
            </div>
        </div>
    )
}