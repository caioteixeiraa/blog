import { BrowserRouter } from 'react-router-dom';
import { Router } from '../src/routes/router'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Blog</h1>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
