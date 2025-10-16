import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Welcome from './Welcome';

function App() {
  return (
    
    <div>
      <LoginSignup/>
       <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
