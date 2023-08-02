import Navegation from './Navegation';
import Signin from './sections/Signin';
import Signup from './sections/Signup';

function Header() {
  return (
    <header>
      <Navegation />
      <Signin />
      <Signup />
    </header>
  );
}

export default Header;
