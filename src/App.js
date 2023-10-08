import { useEffect, useState } from "react";
import './App.css';
import NavigationMenu from './NavigationMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [testStr, setTestStr] = useState('');

  // 변수 초기화
  function callBack(str) {
    setTestStr(str);
  }

  // 첫 번째 렌더링을 마친 후 실행
  useEffect(
    () => {
      axios({
        url: '/auth/signup',
        method: 'GET'
      }).then((res) => {
        callBack(res.data);
      })
    }, []
  );
  return (
    <div className="App">
      <header className="App-header">
        {testStr}
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationMenu />}></Route>
          <Route path="/1" element={<NavigationMenu />}></Route>
          <Route path="/3" element={<NavigationMenu />}></Route>
        </Routes>

      </BrowserRouter>
      {/* 다른 컴포넌트나 내용을 여기에 추가할 수 있습니다. */}
    </div>
  );
}
export default App;
