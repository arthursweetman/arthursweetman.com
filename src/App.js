import { Outlet, Link } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './AppBar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
