import React, { Component } from 'react';
import Genre  from './Genre';

class GenresInDb extends Component {
    constructor()
    {
        super();
        this.state = { genresList: [] }
    }

    mouseOverHandler()
    {
        const wrapper = document.querySelector('.genresWrapper');
        wrapper.classList.add('bg-secondary');
    }

    mouseOutHandler()
    {
        const wrapper = document.querySelector('.genresWrapper');
        wrapper.classList.remove('bg-secondary');
    }

    render() {
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                            </div>
                            <div className="card-body genresWrapper">
                                <div className="row">
                                    {
                                        this.state.genresList.map((genre,index)=>{
                                            return  <Genre  genre={genre}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/genres')
        .then(response => { return response.json() })
        .then(reply => { this.setState({ genresList: reply.data }) })
        .catch(error => { console.log(error) });
    }
}


export default GenresInDb;