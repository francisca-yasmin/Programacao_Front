import estilos from './Body.module.css';
import { Card } from './Card';
import { Lista } from './Lista';

export function Body(){
    return(
        
        <main className={estilos.conteiner}>
            <Lista/>
        </main>
        
        
    )
} 