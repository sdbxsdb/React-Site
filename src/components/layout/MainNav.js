import { useContext } from 'react'
import { Link } from 'react-router-dom';

import classes from './MainNav.module.css';
import DoneContext from '../../store/done-context'


function MainNav() {

  const doneCtx = useContext(DoneContext);

  return (
  <header className={classes.header}>
    <div className={classes.logo}>My Calendar</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All</Link>
        </li>
        <li>
          <Link to='/done'>
            Done
            <small className={classes.badge}>( {doneCtx.totalDone} )</small>
          </Link>
        </li>
        <li>
          <Link to='/new-item'>New</Link>
        </li>
      </ul>
    </nav>
  </header>)
}

export default MainNav