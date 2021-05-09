import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom'

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario'
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>Início</NavLink>
            </li>
            <li> 
              <NavLink to="/usuarios">Usuários cadastrados</NavLink>
            </li>
            <li>  
              <NavLink to="/adicionar">Adicionar usuários</NavLink>
            </li>
          </ul>
        </nav>
        </header>
        <main>
          <Switch>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/adicionar">
              <AdicionarUsuario />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
