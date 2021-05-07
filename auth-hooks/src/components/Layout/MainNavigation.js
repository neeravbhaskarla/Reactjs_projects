import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context'
import {useHistory} from 'react-router-dom'
const MainNavigation = () => {
  const history = useHistory()
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
  const logoutButtonHandler=()=>{
    authCtx.logout()
    history.replace('/auth')
  } 
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn?
            <li>
              <Link to='/auth'>Login</Link>
            </li>:null
          }
          {isLoggedIn?
            <li>
              <Link to='/profile'>Profile</Link>
            </li>:null
          }
          {isLoggedIn?
            <li>
              <button onClick={logoutButtonHandler}>Logout</button>
            </li>:null
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
