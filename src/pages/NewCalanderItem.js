import NewCalanderItemForm from '../components/calander/NewCalanderItemForm'

function NewCalanderItem () {
  function addCalanderItemHandler(itemData) {
    
  }
  return (
    <section>
      <h1>Add New Item</h1>
      <NewCalanderItemForm onAddCalanderItem={addCalanderItemHandler} />
    </section>
  )
}

export default NewCalanderItem