import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Rockets', isActive: true },
  { path: 'missions', text: 'Missions', isActive: false },
  { path: 'profile', text: 'My Profile', isActive: false },
];

const Navbar = () => (
  <nav>
    <ul className="flex items-center gap-6">
      {links.map((link) => (
        <li
          key={link.text}
          className={`text-[#2f8fff] tracking-tight ${link.path === 'profile' ? 'pl-6 border-l-2 border-gray-400' : ''}`}
        >
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
