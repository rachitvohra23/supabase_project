import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './app/login/LoginForm';
import LoginSuccess from './components/LoginSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login-success" element={<LoginSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
