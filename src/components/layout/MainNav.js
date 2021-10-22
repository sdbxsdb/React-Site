import { Link } from 'react-router-dom';

import classes from './MainNav.module.css';


function MainNav() {
  return (
  <header className={classes.header}>
    <div className={classes.logo}>React Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>Jan</Link>
        </li>
        <li>
          <Link to='/feb'>Feb</Link>
        </li>
        <li>
          <Link to='/march'>March</Link>
        </li>
      </ul>
    </nav>
  </header>)
}

export default MainNav