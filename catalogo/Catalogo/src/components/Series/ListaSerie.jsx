import axios from "axios";
import React, {useState, useEffect} from "react";
import { ModalSerie } from './ModalSerie';
import { CardSerie } from './CardSerie';
import estilos from './ListaSerie.module.css';


const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';
 
export function ListaSerie() {
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);
 
    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-br`)

            .then(response => {
                console.log(response.data.results);
                setSeries(response.data.results);
            })
            .catch(error => {
                console.log('erro', error)
            });
        
    },[])

    //MODAL*************
    const handleOpenModal = (serie) =>{
        setSelectedSerie(serie);
    }

    const handleCloseModal = ()=>{
        setSelectedSerie(null);
    }

    return(
        <div>
            <figure>
                {series.map(serie =>(
                    <CardSerie key={serie.id}
                    serie = {serie}
                    onOpenModal={handleOpenModal}
                    />
                ))}
            </figure>
            {selectedSerie && (<ModalSerie serie = {selectedSerie} onClose={handleCloseModal}/>)}
        </div>
    )
}