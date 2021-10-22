import { createContext, useState } from 'react';

const DoneContext = createContext({
  done: [],
  totalDone: 0,
  makeDone: (calanderDoneItem) => {},
  makeUnDone: (calanderItemId) => {},
  itemIsDone: (calanderItemIditemId) => {},
});

export function DoneContextProvider(props) {
  const [userCalanderItemsDone, setUserCalanderItemsDone] = useState([]);

  function makeDoneHandler(calanderDoneItem) {
    setUserCalanderItemsDone((prevUserCalanderItemsDone) => {
      return prevUserCalanderItemsDone.concat(calanderDoneItem);
    });
  }

  function makeUnDoneHandler(calanderItemId) {
    setUserCalanderItemsDone(prevUserCalanderItemsDone => {
      return prevUserCalanderItemsDone.filter(calanderItem => calanderItem.id !== calanderItemId);
    })
  }

  function itemIsDoneHandler(calanderItemId) {
    return userCalanderItemsDone.some(calanderItem => calanderItem.id === calanderItemId);
  }

  const context = {
    done: userCalanderItemsDone,
    totalDone: userCalanderItemsDone.length,
    makeDone: makeDoneHandler,
    makeUnDone: makeUnDoneHandler,
    itemIsDone: itemIsDoneHandler
    
  };

  return (
  <DoneContext.Provider value={context}>
    {props.children}
  </DoneContext.Provider>
  )
}

export default DoneContext;