import Navbar from './components/Navbar';
import Effect from'./components/Effect';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Effect />
    </div>
  );
}

export default App;
