import React, { useState } from 'react';
import './App.css';

function DropdownMenu() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const handleMenuItemClick = () => {
      // 하위 메뉴 항목을 클릭할 때의 동작을 추가하세요.
      // 예: 페이지를 이동하거나 원하는 작업을 수행하세요.
      console.log('하위 메뉴 항목이 클릭되었습니다.');
    };
  
    return (
      <div className="dropdown">
        <button onClick={toggleDropdown}>메뉴 열기</button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="#">메뉴 항목 1</a>
            <a href="#">메뉴 항목 2</a>
            <div className="submenu">
              <a href="#" onClick={handleMenuItemClick}>하위 메뉴 1</a>
              <a href="#" onClick={handleMenuItemClick}>하위 메뉴 2</a>
            </div>
            <a href="#">메뉴 항목 3</a>
          </div>
        )}
      </div>
    );
  }

export default DropdownMenu;
