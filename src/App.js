import React from 'react';
import './App.css';
import NavigationMenu from './NavigationMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<NavigationMenu/>}></Route>
            <Route path="/1" element={<NavigationMenu/>}></Route>
            <Route path="/3" element={<NavigationMenu/>}></Route>
        </Routes>
      
        </BrowserRouter>
      {/* 다른 컴포넌트나 내용을 여기에 추가할 수 있습니다. */}
    </div>
  );
}

export default App;
