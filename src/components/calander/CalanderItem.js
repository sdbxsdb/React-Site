import { useContext } from 'react'

import Card from '../ui/Card';
import classes from './CalanderItem.module.css'
import DoneContext from '../../store/done-context'

function CalanderItem(props) {
  const doneCtx = useContext(DoneContext);

  const itemIsDone = doneCtx.itemIsDone(props.id)

  function toggleDoneStatusHandler() {

    
    if (itemIsDone) {
      doneCtx.makeUnDone(props.id);
    } else {
      doneCtx.makeDone({
        id: props.id,
        title: props.title,
        description: props.description,
        location: props.location,
        image: props.image,
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleDoneStatusHandler}>
            {itemIsDone ? 'Remove from Done' : 'Add to Done'}
          </button>
        </div>
      </Card>
    </li>
  );
}


export default CalanderItem;