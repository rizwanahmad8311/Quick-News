import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
    <NavBar/>
    <Routes>  
    <Route exact path="general/" element={<News key="general" pageSize={9} country="in" category="general" />} />
    <Route exact path="about/" element={<News key="about" pageSize={9} country="in" category="about" />} />
    <Route exact path="business/" element={<News key="business" pageSize={9} country="in" category="business" />} />
    <Route exact path="entertainment/" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" />} />
    <Route exact path="health/" element={<News key="health" pageSize={9} country="in" category="health" />} />
    <Route exact path="science/" element={<News key="science" pageSize={9} country="in" category="science" />} />
    <Route exact path="sports/" element={<News key="sports" pageSize={9} country="in" category="sports" />} />
    <Route exact path="technology/" element={<News key="technology" pageSize={9} country="in" category="technology" />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
