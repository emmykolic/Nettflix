import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={ "https://api.themoviedb.org/3" + requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={"https://api.themoviedb.org/3" + requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={"https://api.themoviedb.org/3" + requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={"https://api.themoviedb.org/3" + requests.fetchActionMovie}/>
      <Row title="Comedy Movies" fetchUrl={"https://api.themoviedb.org/3" + requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={"https://api.themoviedb.org/3" + requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={"https://api.themoviedb.org/3" + requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={"https://api.themoviedb.org/3" + requests.fectchDocumentries}/>
    </div>
  );
}
export default App; 