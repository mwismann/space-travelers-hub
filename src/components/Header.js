import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../planet.png';

const Header = () => (
  <>
    <header className="py-4 px-12 flex items-center justify-between border-b-2">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Planet" className="w-12" />
        <span className="text-2xl font-medium">Space Travelers&apos; Hub</span>
      </div>
      <Navbar />
    </header>
    <Outlet />
  </>
);

export default Header;
