import React from "react";
import "./Message.css";
import home from './icons/home.png';
import user from "./icons/user.png";
import tv from "./icons/series.png";
import shop from "./icons/shop.png";
import gif from "./icons/gif.png";
import video from "./icons/video-player.png";
import photos from "./icons/photos.png";
import { Giphy } from "../Gif/Gif";


export const MessagePost = () => {
    const [Data, setData] = React.useState("");
    const [value, setValue] = React.useState(0);
    const [gifPost, setGifPost] = React.useState("");

    const handlePost = (e) => {
        setGifPost(Data)
        setData("")
    }


    return(
        <div>
            <div className="header">
        {/* Facebook logo  */}
                <img className="logo" width={"50px"} src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt="" />

        {/* all four icons on the header  */}
                <div className="icons">
                    <img  src={home} alt="home" />
                    <img src={user} alt="user" />
                    <img src={tv} alt="tv" />
                    <img src={shop} alt="shop" />
                </div>
            </div >


            <div className="Post-body">
                {/* Post input box  */}

                <div className="input">
                    
                    <img width={"40px"} src="https://www.pngmart.com/files/21/Account-User-PNG-Photo.png" alt="" />
                <input className="inputBox"  type="text" placeholder="What's on your mind."/>

                

                </div> 
                <div className="post" onClick={handlePost}>
                    Post
                </div>
                

                {/* div for showing gif  */}
                <div className="myGif">
                    {Data ? <img width={"40%"}  src={Data} alt="" /> : ""}
                </div>

                {/* imported fetched gif from Gif.jsx  */}
                <div >
                    {value ? <Giphy Data={setData} /> : null}
                    
                </div>
                
                <div className="messageOptions">
                    <div  className="otherIcon">
                    <img src={video} alt="Live Video" /> 
                    <p>Live Video</p>
                    </div>

                    <div  className="otherIcon">
                    <img src={photos} alt="Photo" /> 
                    <p>Photo/Video</p>
                    </div>

                    {/* On click function for gifs to post  */}

                    <div onClick={() => {setValue(1)}}  className="otherIcon">
                    <img src={gif} alt="gif" /> 
                    <p>Gif</p>

                    </div>

                    
                    
                </div>

               

                
            
            </div>

        {/* on click post gif will show in this div on UI  */}
            <div className="posted-data">
                {gifPost ? <img width={"40%"}  src={gifPost} alt="" /> : ""}
                  
                </div>
        </div>
    )
}