/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Favourites extends Component {

    constructor() {
        super()
        this.state = {
            genres: ['All Genre', 'Action', "Romance"],
            currGenre: "All Genre",
        }


        // let genreids = {
        //     28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
        //     27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
        // };

        // let temp = [];
        // let movie = movies.results;
        // movie.forEach((movieObj) => {
        //     if (!temp.includes(genreids[movieObj.genre_ids[0]])) {
        //         temp.push(genreids[movieObj.genre_ids[0]]);
        //     }
        // })
        // temp.unshift('All Genres');
        // this.setState({
        //     genres: [...temp],
        // })
    }


    render() {

        let genreids = {
            28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
            27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
        };

        let movie = movies.results;

        return (

            <>
                <div className='main'>
                    <div className='row'>
                        <div className='col-3'>
                            <ul class="list-group favourites-genres">
                                {
                                    this.state.genres.map((genre) => (
                                        this.state.currGenre === genre ?
                                            <li class="list-group-item active">{genre}</li> :
                                            <li class="list-group-item">{genre}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='col-9'>
                            <div className='row'>
                                <input type='text' className='input-group-text col' placeholder='Search' ></input>
                                <input type='number' className='input-group-text col' placeholder='Rows count'></input>
                            </div>
                            <div className='row'>
                                <table class="table favourites-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Genre</th>
                                            <th scope="col">Popularity</th>
                                            <th scope="col">Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            movie.map((movieObj) => (
                                                <tr>
                                                    <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{ width: '6rem' }} />  {movieObj.title}</td>
                                                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                                                    <td>{movieObj.popularity}</td>
                                                    <td>{movieObj.vote_average}</td>
                                                    <th scope="col"><button type="button" class="btn btn-danger">Delete</button></th>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
