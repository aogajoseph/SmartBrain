import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Particles from './components/Particles/Particles';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

function App() { 
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <Particles id="tsparticles" />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
