import TimelineItem from './TimelineItem';
import classes from './TimelineList.module.css';

function TimelineList(props) {
  return (
    <ul className={classes.list}>
      {props.timelineItems.map((timelineItem) => (
        <TimelineItem 
          key={timelineItem.id} 
          id={timelineItem.id} 
          image={timelineItem.image} 
          title={timelineItem.title} 
          address={timelineItem.address} 
          description={timelineItem.description} 
        />
        ))}
    </ul>
  )
}

export default TimelineList;