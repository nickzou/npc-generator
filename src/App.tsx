//External Libaries
import React from 'react';

//Data
import data from './exampledata.json';

//Global Styles
import './App.scss';

//Components
import NPCListItem from './components/NPCListItem/NPCListItem';

//Functions
import species from './functions/species';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        this is the header
      </header>
      <main>
          {data.NPCS.map(npc => <NPCListItem portrait={npc['portrait-face']} background={npc['portrait-bg']} name={npc.name} age={npc.age} species={species(npc.species)}/>)}
      </main>
    </div>
  );
}

export default App;
