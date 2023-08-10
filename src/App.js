import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  return (
    <div>
    <NavBar/>
    <News pageSize={9}/>
    </div>
  );
}

export default App;
