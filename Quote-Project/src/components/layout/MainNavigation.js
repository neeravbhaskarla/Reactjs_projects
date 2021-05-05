import {NavLink} from 'react-router-dom'
import classes from './MainNavigation.module.css'
const mainNavigation = ()=>{
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Great Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/quotes' activeClassName={classes.active}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-quotes' activeClassName={classes.active}>
                            Add a new Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )   
}
export default mainNavigation