import { useDispatch, useSelector } from 'react-redux';
import { updateAuthState } from '../redux/authSlice'; 
import { supabase } from '../utils/supabaseClient';  

export const useLoginHook = () => {
  const dispatch = useDispatch();
  const { authenticated, name } = useSelector((state) => state.auth);

  const onLogin = async (email, password) => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .eq('password', password)
      .single();

    if (data) {
      dispatch(updateAuthState({
        token: data.email, 
        authenticated: true,
        user: {
          id: data.id,
          name: data.name,
        }
      }));
    } else {
      throw new Error('Incorrect email or password');
    }
  };

  return { authenticated, name, onLogin };
};
