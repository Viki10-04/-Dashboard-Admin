import './App.css';
import routes from './routes'
import { useRoutes } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar.jsx'
import SidBar from './components/SidBar/SidBar.jsx'

function App() {

  let router = useRoutes(routes)

  return (
    <>
      <TopBar />
      <div className="container">
        <SidBar />
        <div className='emp'>{router}</div>
      </div>
    </>
  );
}

export default App;
