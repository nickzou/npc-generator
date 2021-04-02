//External Libaries
import React from 'react';

//Data
import data from './exampledata.json';

//Global Styles
import './styles/App.scss';

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
        <NPCListItem name={data.NPCS[0].name} age={data.NPCS[0].age} species={species(data.NPCS[0].species)}/>
      </main>
    </div>
  );
}

export default App;
