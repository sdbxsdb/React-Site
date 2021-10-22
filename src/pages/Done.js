import { useContext } from 'react';

import DoneContext from '../store/done-context'
import CalanderList from '../components/calander/CalanderList'

function DonePage() {
  const doneCtx = useContext(DoneContext);

  return (
    <section>
      <h1>Done</h1>
      <CalanderList calanderItems={doneCtx.done} />
    </section>
    );
}

export default DonePage;