import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from './Rotas/Rotas'

// estrutura basica do react é atraves de funções
function App() {
// para trazer o resultado da função eu coloco o que eu quero no return
// qu deve ter apenas 1 componente
  return (
    <>
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>


    </>
  )
}

export default App
