import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1></h1>} />
        <Route path="/login" element={<h1>Page login</h1>} />
        <Route path="/page3" element={<h1>Page 3</h1>} />
      </Routes>
    </div>
  );
}

export default App;
