import { Outlet, Link } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './AppBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
