import { useContext } from 'react';

import DoneContext from '../store/done-context'
import CalanderList from '../components/calander/CalanderList'

function DonePage() {
  const doneCtx = useContext(DoneContext);

  let content;

  if (doneCtx.totalDone === 0) {
    content = <p>You've don't nothing... Get your shit together</p>
  } else {
    content = <CalanderList calanderItems={doneCtx.done} />
  }

  return (
    <section>
      <h1>Done</h1>
      {content} 
    </section>
    );
}

export default DonePage;