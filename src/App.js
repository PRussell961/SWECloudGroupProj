
import './App.css';
import NavBar from './Components/NavBar.jsx';
import Home from './Components/Home.jsx';
import WriteReview from './Components/WriteReview';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <div className="container">
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<LogIn/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/WriteReview" element={<WriteReview/>}/>
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
