import { Routes, Route} from "react-router-dom";
import { Inicial } from "../pages/Inicial";
import { Perfil } from "../pages/Perfil";
import { Series } from "../pages/Series";
import { Lista } from '../components/Lista';
import { ListaSerie } from "../components/Series/ListaSerie";


export function Rotas(){
    return(
        <>
            <Routes>
                <Route path = '/' element={<Inicial/>}>
                    <Route index element={<Lista/>}/>
                    <Route path ='perfil' element={<Perfil/>}/>
                    <Route path='series' element ={<ListaSerie/>}/>

                </Route>
            </Routes>
        
        </>
    )
}