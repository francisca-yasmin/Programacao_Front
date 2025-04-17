import estilos from './Header.module.css';

// estrutura basica para os componentes
export function Header(){
    return (
        <>
        <header className={estilos.conteiner}>
            <h1 className={estilos.titulo}> Chica Flix</h1>
            {/* <p>A melhor plataforma de Filmes pra você</p> */}
        </header>
        
        </>
    )
}