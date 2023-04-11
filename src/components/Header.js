import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => (
  <>
    <header>
      <span>Logo placeholder</span>
      <Navbar />
    </header>
    <Outlet />
  </>
);

export default Header;
