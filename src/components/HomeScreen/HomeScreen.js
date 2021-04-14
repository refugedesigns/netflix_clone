import React from 'react';
import './HomeScreen.css';

import Nav from '../Nav/Nav';
import Banner from './Banner/Banner';
import Row from '../Row/Row';
import request from '../../utilities/request';

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <Nav /> 
            <Banner fetchUrl={request.fetchTrending} />  
            <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={request.fetchTrending} />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
            <Row title="Documentaries Movies" fetchUrl={request.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen;
