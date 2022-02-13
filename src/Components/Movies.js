/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Movies extends Component {

    constructor() {
        super();
        this.state = {
            hover: '',
            pages:[1]
        }
    }

    render() {
        let movie = movies.results;
        return (
            movie.length === 0 ?
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> :
                <div>
                    <h1 className='text-center'><strong>Trending</strong></h1>
                    <div className='movies-list'>
                        {
                            movie.map((movieObj) => (
                                <div className="card movies-card" onMouseEnter={() => this.setState({ hover: movieObj.id })} onMouseLeave={() => this.setState({ hover: '' })}>
                                    <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movies-img" alt={movieObj.title} />
                                    {/* <div className="card-body"> */}
                                    <h5 className="card-title movies-title">{movieObj.original_title}</h5>
                                    {/* <p className="card-text movie-text">{movieObj.overview}</p> */}
                                    <div className='button-wrapper' style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                                        {
                                            this.state.hover === movieObj.id &&
                                            <a href="#" className="btn btn-primary movies-button">Add To Favourites</a>
                                        }
                                    </div>
                                    {/* </div> */}
                                </div>
                            ))
                        }
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                {
                                    this.state.pages.map((pageNum)=>(
                                        <li class="page-item"><a class="page-link" href="#">{pageNum}</a></li>
                                    ))
                                }
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
        )
    }
}

