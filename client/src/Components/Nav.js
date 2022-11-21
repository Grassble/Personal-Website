import '../App.css';
import { Link } from 'react-router-dom';

function Nav({ toggleTheme }) {

  
    
      return (
        <nav className='navNav'>
          {/* <img src="https://clipartcraft.com/images/husky-clipart-transparent-3.png" alt='' className='logo'/> */}
          <ul className='navUl'>
            <Link to="/">
              <li className='navLi'>Home</li>
            </Link>
            <Link to="/project">
                <li className='navLi'>Projects</li>
            </Link>
            <Link to="/aboutme">
              <li className='navLi'>About Me</li>
            </Link>
            <div className='navButtonContainer'>
              <button className='navButton' variant="outline" onClick={toggleTheme}>
                Light/Dark Mode
              </button>
            </div>
          </ul>
        </nav>
      );
    }
    
    export default Nav;