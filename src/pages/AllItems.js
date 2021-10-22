import { useState, useEffect } from 'react'

import CalanderList from '../components/calander/CalanderList';


function AllItemsPage() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ loadedItems, setLoadedItems ] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-test-62f63-default-rtdb.firebaseio.com/calanderItems.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const items = [];
      
      for (const key in data) {
        const item = {
          id: key,
          ...data[key]
        };

        items.push(item)
      }

      setIsLoading(false);
      setLoadedItems(items);
    });
  }, []);



  if ( isLoading ) {
    return (
      <section>Loading...</section>
    )
  }

  return (
    <section>
      <h1>All Items Page</h1>
        <CalanderList calanderItems={loadedItems} />
    </section>
    );
}

export default AllItemsPage;