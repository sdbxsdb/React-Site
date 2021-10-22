import { Link } from 'react-router-dom';

import classes from './MainNav.module.css';


function MainNav() {
  return (
  <header className={classes.header}>
    <div className={classes.logo}>My Calendar</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All</Link>
        </li>
        <li>
          <Link to='/done'>Done</Link>
        </li>
        <li>
          <Link to='/new-item'>New</Link>
        </li>
      </ul>
    </nav>
  </header>)
}

export default MainNav