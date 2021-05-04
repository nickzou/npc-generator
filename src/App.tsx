//External Libaries
import React, {useState} from 'react';


//Data
import data from './exampledata.json';

//Global Styles
import './App.scss';

//Components
import NPCListItem from './components/NPCListItem/NPCListItem';
import NPCModal from './components/NPCModal/NPCModal';


//Functions
import species from './functions/species';



function App() {

  const [activeNPC, setActiveNPC] = useState(data.NPCS[0])
  const [modalToggle, setModalToggle] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        this is the header
      </header>
      <main>
          <NPCModal 
            npcData={activeNPC}
            modalToggle={modalToggle}
            setModalToggle={setModalToggle}
          ></NPCModal>

          {data.NPCS.map((npc,index) => <NPCListItem 
            key={`${npc.species[0]}_${index}`}
            portrait={npc.portraitFace} 
            background={npc.portraitBg} 
            name={npc.name} 
            age={npc.age} 
            species={species(npc.species)}
            npcRawData={npc}
            setModalToggle={setModalToggle}
            setActiveNPC={setActiveNPC}
          />)}
      </main>
    </div>
  );
}

export default App;
