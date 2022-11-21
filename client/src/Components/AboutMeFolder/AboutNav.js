import { Link } from 'react-router-dom';

function AboutNav() {

  
    
      return (
        <nav className='navNav'>
          <ul className='navUl'>
            <Link to="/growingup">
              <li className='navLi'>Growing Up</li>
            </Link>
            <Link to="/hobbies">
                <li className='navLi'>Hobbies</li>
            </Link>
            <Link to="/travelling">
              <li className='navLi'>Traveling</li>
            </Link>
          </ul>
        </nav>
      );
    }
    
    export default AboutNav