import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAuthState } from '../redux/authSlice';
import '.././assets/css/App.css';
import { useEffect } from 'react';

const LoginSuccess = () => {
  const storedToken = localStorage.getItem("reduxState");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth.user);

  useEffect(() => {
    if ( storedToken == null  ) {
      return navigate("/");
    }
  }, []);

const handleLogout = () => {
    dispatch(updateAuthState({
      token: '',
      authenticated: false,
      user: { id: '', name: '' }
    }));
    localStorage.removeItem('reduxState'); 
    navigate('/'); 
  };
  

  return (
    <div className="success-container">
      <h1>Welcome, {name}!</h1>
      <p>You have successfully logged in.</p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default LoginSuccess;
