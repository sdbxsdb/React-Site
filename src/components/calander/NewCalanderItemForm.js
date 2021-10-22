import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewCalanderItemForm.module.css'

function NewCalanderItemForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const locationInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const itemData = {
      title: enteredTitle,
      image: enteredImage,
      location: enteredLocation,
      description: enteredDescription,
    }

    props.onAddCalanderItem(itemData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Item Title</label>
          <input id="title"  type="text" required ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Item Image</label>
          <input id="image"  type="url" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="location">Item Location</label>
          <input id="location"  type="text" rows="5" required ref={locationInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Item Description</label>
          <textarea id="description" required ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add Item</button>
        </div>
      </form>
    </Card>
  )
}

export default NewCalanderItemForm