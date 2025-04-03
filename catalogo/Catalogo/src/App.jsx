import estilos from './App.module.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/header';
import { Body } from './components/Body';

// estrutura basica do react é atraves de funções
function App() {
// para trazer o resultado da função eu coloco o que eu quero no return
// qu deve ter apenas 1 componente
  return (
    <>
     <Header/>
     <Navbar/>
     <Body/>
    </>
  )
}

export default App
