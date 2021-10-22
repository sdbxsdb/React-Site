import { useHistory } from 'react-router-dom'

import NewCalanderItemForm from '../components/calander/NewCalanderItemForm'

function NewCalanderItem () {
  const history = useHistory();
  
  function addCalanderItemHandler(itemData) {
    fetch(
      'https://react-test-62f63-default-rtdb.firebaseio.com/calanderItems.json', 
      {
        method: 'POST',
        body: JSON.stringify(itemData),
        headers: {
          'content-type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/')
    });
  }
  return (
    <section>
      <h1>Add New Item</h1>
      <NewCalanderItemForm onAddCalanderItem={addCalanderItemHandler} />
    </section>
  )
}

export default NewCalanderItem