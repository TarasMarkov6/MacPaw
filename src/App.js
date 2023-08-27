import './styles/App.css';
import Logo from './components/Logo.jsx';
import StartContainer from './components/StartContainer.jsx';
import { useState } from 'react';
import VotingBlock from './components/VotingBlock.jsx';
import BreedsBlock from './components/BreedsBlock.jsx';
import GalleryBlock from './components/GalleryBlock.jsx';
import StartImage from './components/StartImage.jsx';

function App() {
  const blocks = [
    <VotingBlock />,
    <BreedsBlock />,
    <GalleryBlock />,
    <StartImage />
  ];
  const [block, setBlock] = useState(blocks[3]);
  const [allCardStatus, setAllCardsStatus] = useState(true);
  const pickBlock = function (index) {
    setBlock(blocks[index]);
    setAllCardsStatus(true);
  }
  const deactivateCards = function () {
    setAllCardsStatus(false);
  }

  return (
    <div className='App'>
      <section className='leftSideBar'>
        <div>
          <Logo pickBlock={pickBlock} deactivateCards={deactivateCards} />
          <StartContainer pickBlock={(index)=>pickBlock(index)} allCardStatus={allCardStatus}/>
        </div>
      </section>
      <section className='rightSideBar'>
        {block}
      </section>
    </div>
  );
}

export default App;