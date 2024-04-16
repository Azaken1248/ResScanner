import '../styles/home.css';
import logo from '../assets/logo.png';

function Nav() {
  return (
    <nav>
      <a href="#/">
        <img src={logo} alt="University logo" />
      </a>
      <div className="nav-links" id="navLinks">
        <ul>
          <li>
            <a href="#/">HOME</a>
          </li>
          <li>
            <a href="#/">ABOUT</a>
          </li>
          <li>
            <a href="#/">COURSES</a>
          </li>
          <li>
            <a href="#/">BLOG</a>
          </li>
          <li>
            <a href="#/joinus">JOIN</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
