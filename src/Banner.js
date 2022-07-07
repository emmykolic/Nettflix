import React, {useEffect, useState} from 'react'
import axios from 'axios';
import requests from './requests';
import './Banner.css'

function Banner() {
    // making a request for a movie pics as banner
    const [movie, setMovies] = useState([]);
    const base_url = "https://api.themoviedb.org/3";

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(base_url + requests.fetchTopRated)
            // setMovies(request.data.results);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            );
            console.log('Movies', request.data.results)
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

  return (
    <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
    }}> {/* this header will have a bacground image */}
        <div className="banner__contents">
            {/* {title} to give you a tittle or a name you use something like this */}
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="bottom--fadeBottom"></div>
    </header>
  );
}

export default Banner;
