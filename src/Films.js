import React from 'react';


function _handleMouseOver () {
    console.log('ouch');
}

// const movies = [
    //     'Devil Wears Prada',
    //     'A Cry in the Dark',
    //     'Sophies Choice'
    // ]
    
    class MovieList extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                movies: [
                    'Devil Wears Prada',
                    'A Cry in the Dark',
                    'Sophies Choice',
                    'Mama Mia'
                ]
            }
        }
        render () {
            return (
                <ul>
                {this.state.movies.map((movie, i ) => <li onClick={ () => this._handleClick(i)}>{movie}</li>)}
            </ul>
        )
    }
        _handleClick = (index) => {
            const newMovies = [
                ...this.state.movies];
                newMovies[index] += '!';
                this.setState({
                    movies: newMovies
                });
        }

}


export default MovieList;