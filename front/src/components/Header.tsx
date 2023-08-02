import { RootState } from '../store';
import Navegation from './Navegation';
import Signin from './sections/Signin';
import Signup from './sections/Signup';
import { useSelector } from 'react-redux';

function Header() {
  const showSignin = useSelector((state: RootState) => state.user.showSignin);
  const showSignup = useSelector((state: RootState) => state.user.showSignup);

  return (
    <header>
      <Navegation />
      {showSignin && <Signin />}
      {showSignup && <Signup />}
    </header>
  );
}

export default Header;
