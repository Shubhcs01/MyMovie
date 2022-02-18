/* eslint-disable jsx-a11y/anchor-is-valid */
// APIKEY -> aa1325d5206f870ba6fab7d3053298c5
// https://api.themoviedb.org/3/trending/all/day?api_key=aa1325d5206f870ba6fab7d3053298c5
//https://api.themoviedb.org/3/movie/{movie_id}/changes?api_key=<<api_key>>&page=1
// https://api.themoviedb.org/3/movie/popular?api_key=aa1325d5206f870ba6fab7d3053298c5&language=en-US&page=1

import React, { Component } from 'react';
import axios from 'axios';

export default class Movies extends Component {

    constructor() {
        super();
        this.state = {
            hover: '',
            pages: [1],
            currPage: 1,
            movies: [],
            favourites: ["234","001"],
        }
    }

    changeMovies = async () => {
        // console.log(`https://api.themoviedb.org/3/movie/popular?api_key=aa1325d5206f870ba6fab7d3053298c5&language=en-US&page=${this.state.currPage}`)
        let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=aa1325d5206f870ba6fab7d3053298c5&language=en-US&page=${this.state.currPage}`)
        let data = response.data;
        this.setState(
            {
                movies: [...data.results]
            }
        )
    }

    handelNext = () => {

        let currpage = this.state.currPage;
        this.setState({
            pages: [...this.state.pages, this.state.pages.length + 1],
            currPage: currpage + 1,
        }, this.changeMovies)

    }

    handelPrevious = () => {

        if (this.state.currPage !== 1) {
            this.setState({
                currPage: this.state.currPage - 1,
            }, this.changeMovies)
        }
    }

    handelPageClick = (val) => {

        if (val !== this.state.currPage) {
            this.setState({
                currPage: val,
            }, this.changeMovies)
        }
    }

    handelFavourites = (movie) => {
        let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]") //Read
        if (this.state.favourites.includes(movie.id)) {
            //Remove
            oldData = this.state.favourites.filter((m) => m !== movie.id)
        } else {
            //Add
            oldData.push(movie);
        }

        // Update
        localStorage.setItem("movies-app", JSON.stringify(oldData));

        this.handelFavouritesState();
    }

    handelFavouritesState = () => {
        //Read updated data again, extract id, save to
        let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]") //Read
        oldData = oldData.map((m) => m.id)
       
        this.setState({
            favourites: [...oldData]
        })

    }




    render() {
        let movie = this.state.movies;
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
                                    <h5 className="card-title movies-title">{movieObj.original_title}</h5>
                                    <div className='button-wrapper' style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                                        {
                                            this.state.hover === movieObj.id &&
                                            <a className="btn btn-primary movies-button" onClick={() => this.handelFavourites(movieObj)}>ADD</a>
                                        }  
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" onClick={() => this.handelPrevious()}>Previous</a></li>
                                {
                                    this.state.pages.map((pageNum) => (
                                        <li class="page-item"><a class="page-link" onClick={() => this.handelPageClick(pageNum)}>{pageNum}</a></li>
                                    ))
                                }
                                <li class="page-item"><a class="page-link" onClick={() => this.handelNext()}>Next</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
        )
    }

    async componentDidMount() {

        let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=aa1325d5206f870ba6fab7d3053298c5&language=en-US&page=${this.state.currPage}`)
        let data = response.data;

        this.setState(
            {
                movies: [...data.results]
            }
        )
    }
}

