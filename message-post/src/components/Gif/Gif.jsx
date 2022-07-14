import React from "react";
import axios from "axios";

import "./Gif.css";

export const Giphy = ({Data}) => {

    const [gifs, setGifs] = React.useState([]);

    const handleSearch = (e) => {
        if(gifs.length = 0) return

         axios.get(`https://api.giphy.com/v1/gifs/search?api_key=O1sxrWKe5aDlHXl9nNSIvV3pFgh3xg5V&q=${e.target.value}&limit=25&offset=0&rating=g&lang=en`).then(res => {
            console.log(res.data)
            setGifs(res.data.data)
        },[])
    }

    return (
        <div>
            <input className="inputBoxGif" placeholder="serach gif..." type="text" onChange={(e) => {handleSearch(e)}} />
            <div className="gifs">

            {gifs.map((gif) => {
                return(
                 <img style={{"cursor":"pointer"}} key={gif.id} src={gif.images.original.url} onClick={() => {Data(gif.images.original.url)}} width={"100px"} alt="" />
                 )
                })}
            </div>
        </div>
    )
}