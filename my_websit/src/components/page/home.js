import React, {useState,useEffect} from 'react';
import './home.css';
function Home(){
    useEffect(()=>{
        fetchItems();
    },[]);
    const apiKey = process.env.REACT_APP_API;
    const [items,setItem] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=e8a591975538cc8f7f8343504801e9d7`);
        const items = await data.json();
        console.log(data);
        setItem(items);
    };
    return(
        <div className ="container">
            
        </div>
    )
 }    
export default Home;
/*{items.map(item =>(
                <div className ='card'>
                    <div className ="imgs">
                        {item.logo_path == null ? "test":<img src = {`http://image.tmdb.org/t/p/w185/${item.logo_path}`}></img>}
                    </div>
                    <h4>{item.name}</h4>
                </div>
            ))} */