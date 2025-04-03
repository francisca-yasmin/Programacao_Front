import axios from "axios";
import React, {useState, useEffect} from "react"; //state controla em que mommento do codigo eu estou, effect exibe isso em tela
import { Card } from './Card';

const API_url = 'https://api.themoviedb.org/3';
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';

export function Lista(){
    const[movies, setMovies] = useState([])

    //paramentros {}script de programação, [] dependencias
    useEffect(()=>{
        axios.get(`${API_url}/movie/popular?api_key=${API_key}&language=pt-BR`)
        //se der certo o que eu quero que aconteça? e se der ruim (?)
            .then(response =>{
                console.log(response.data.results);
                setMovies(response.data.results);                                 
            })
            .catch(error =>{
                console.log('erro', error)
            });

    },[])

    return(
        <div>
            <figure>
                {movies.map(movie =>(
                    <Card key={movie.id}
                    movie={movie}
                    />
                ))}
            </figure>
        </div>
    
    )
  } 
