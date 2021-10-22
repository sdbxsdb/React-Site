import { createContext, useState } from "react";

const DoneContext = createContext({
  done: [],
  totalDone: 0,
  makeDone: (doneItem) => {},
  makeUnDone: (itemId) => {},
  itemIsDone: (itemId) => {},
});

function DoneContextProvider(props) {
  const [userItemsDone, setUserItemsDone] = useState([]);

  function makeDoneHandler(doneItem) {
    setItemsDone((prevUserItemsDone) => {
      return prevUserItemsDone.concat(doneItem);
    });
  }

  function makeUnDoneHandler(itemId) {
    setItemsDone(prevUserItemsDone => {
      return prevUserItemsDone.filter(item => item.id !== itemId);
    })
  }

  function itemIsDoneHandler(itemId) {
    return userItemsDone.some(item => item.id === itemId);
  }

  const context = {
    done: userItemsDone,
    totalDone: userItemsDone.length,
    makeDone: makeDoneHandler,
    makeUnDone: makeUnDoneHandler,
    itemIsDone: itemIsDoneHandler
    
  };

  return (
  <DoneContext.Provider value={context}>
    {props.childern}
  </DoneContext.Provider>
  )
}