import CalanderItem from './CalanderItem';
import classes from './CalanderList.module.css';

function CalanderList(props) {
  return (
    <ul className={classes.list}>
      {props.calanderItems.map((item) => (
        <CalanderItem 
          key={item.id} 
          id={item.id} 
          image={item.image} 
          title={item.title} 
          address={item.address} 
          description={item.description} 
        />
        ))}
    </ul>
  )
}

export default CalanderList;