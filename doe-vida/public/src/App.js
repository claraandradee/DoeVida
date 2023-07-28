import './App.css';
import Rotas from './Rotas';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/template/Menu'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Menu /> 
        <Rotas/>
      </div>
    </BrowserRouter>
  )
}

export default App;
