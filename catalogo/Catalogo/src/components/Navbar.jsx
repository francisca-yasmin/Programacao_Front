import estilos from './Navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar(){
    
    return (
        <nav className={estilos.conteiner}>
            <ul className={estilos.ul}>

                <Link to='/'>
                    <li className={estilos.li}> 
                    <span class="material-symbols-outlined">home</span>
                        Home 
                    </li>
                </Link>

                <Link to='series'>
                    <li className={estilos.li}>
                    <span class="material-symbols-outlined">theaters</span> 
                        Series 
                    </li>
                </Link>

                <Link to='perfil'>
                    <li className={estilos.li}>
                    <span class="material-symbols-outlined">person</span> 
                        Perfil 
                    </li>
                </Link>
            </ul>

        </nav>
    )

}