import axios from "axios";
import React, {useState} from "react";
import Results from "./Results";

const SearchArea= () => {

    const [keyword, setKeyword] = useState("budgies");
    const [Videos,setVideos] = useState([]);

    function requestSearch(){
        axios.get('https://youtube.googleapis.com/youtube/v3/search?type=video&q=budgies&part=snippet&maxResults=25&key=${process.env.API_KEY}')
        .then((res) => {
            const {items} = res.data;
            console.log(items);
            setVideos(items);
        })
        .catch((err)=> console.log(err));
    }
    return (
        <div className="search-area">
            <form onSubmit={ (e) =>{
                e.preventDefault();
                requestSearch();         
            }}>
                <label htmlFor="keyword">
                    Search
                    <input type="text" id="keyword" value={keyword} onChange={(e)=> setKeyword(e.target.value)}/>
                    </label>
                    <button>Submit</button>
            </form>
            <Results Videos={videos}/>
        </div>
    )
    }
export default SearchArea; 