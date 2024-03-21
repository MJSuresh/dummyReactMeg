import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

export default function NavigationBar(){
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to='/' >Home</NavLink>
                    </li>
                    <li>
                         <NavLink to="/cart">Cart</NavLink>
                    </li>
                    <li>
                         <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}