
import './App.css';
import { LeftMenu } from './components/LeftMenu';
import { MainContainer } from './components/MainContainer';
import { RightMenu } from './components/RightMenu';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <RightMenu />
      <MainContainer />

      <div className='background'></div>
    </div>);
}

export default App;
