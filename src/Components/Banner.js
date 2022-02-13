/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Banner extends Component {
    render() {
        let banner = movies.results[0];
        return (
            <>
                <div className="card banner-card">
                    <img src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`} className="card-img-top banner-img" />
                    <div className="card-body">
                        <h5 className="card-title banner-title">{banner.title}</h5>
                        <p className="card-text banner-text">{banner.overview}.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </>
        )
    }
}
