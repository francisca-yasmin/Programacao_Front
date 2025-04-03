import estilos from './Navbar.module.css';

export function Navbar(){
    
    return (
        <nav className={estilos.conteiner}>
            <ul className={estilos.ul}>
                <li className={estilos.li}> 
                <span class="material-symbols-outlined">home</span>
                    Home 
                </li>
                <li className={estilos.li}>
                <span class="material-symbols-outlined">theaters</span> 
                    Filmes 
                </li>
                <li className={estilos.li}>
                <span class="material-symbols-outlined">person</span> 
                    Perfil 
                </li>
            </ul>

        </nav>
    )

}