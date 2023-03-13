import { useState } from 'react';
import TopMenu from '../src/components/TopMenu/TopMenu'
import SideMenu from '../src/components/SideMenu/SideMenu'
import Incident from './pages/incident/Incident';

export function createIncident() {
  setShowIncident(true);
}

function App() {
  const [showIncident, setShowIncident] = useState(false);

  return (

    <>

      <TopMenu />
      <SideMenu />
      {showIncident && <Incident />}

    </>
  );
}

export default App;
