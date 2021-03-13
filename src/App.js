import React,{useState} from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import { Infosec } from './components/Infosec';
import Navbar from './components/Navbar';
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';



const App = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen)
  }

  return (<>
    <GlobalStyle/>
    <Navbar toggle={ toggle}/>
    <Dropdown isOpen={isOpen } toggle={ toggle} />
    <Hero slides={SliderData} />
    <Infosec {...InfoData} />
    
    
  </>)
}
export default App;