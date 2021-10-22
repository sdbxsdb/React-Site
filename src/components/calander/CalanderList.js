import CalanderItem from './CalanderItem';
import classes from './CalanderList.module.css';

function CalanderList(props) {
  return (
    <ul className={classes.list}>
      {props.calanderItems.map((calanderItem) => (
        <CalanderItem 
          key={calanderItem.id} 
          id={calanderItem.id} 
          image={calanderItem.image} 
          title={calanderItem.title} 
          address={calanderItem.address} 
          description={calanderItem.description} 
        />
        ))}
    </ul>
  )
}

export default CalanderList;