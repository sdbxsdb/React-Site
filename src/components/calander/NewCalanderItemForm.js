import Card from '../ui/Card';
import classes from './NewCalanderItemForm.module.css'

function NewCalanderItemForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Item Title</label>
          <input id="title"  type="text" required/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Item Image</label>
          <input id="image"  type="url" />
        </div>
        <div className={classes.control}>
          <label htmlFor="location">Item Location</label>
          <input id="location"  type="text" rows="5" required/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Item Description</label>
          <textarea id="description" required/>
        </div>
        <div className={classes.actions}>
          <button>Add Item</button>
        </div>
      </form>
    </Card>
  )
}

export default NewCalanderItemForm