import React, { useState } from 'react';
import './NavigationMenu.css'; // CSS 파일을 import

function NavigationMenu() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isChargingStationMenuOpen, setIsChargingStationMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleChargingStationMenu = () => {
        setIsChargingStationMenuOpen(!isChargingStationMenuOpen);
    };

    return (
        <nav className="ui-layout-header-HeaderMainNavigation navigation-menu--collapsed mod-bp-l" aria-label="메인 네비게이션">
            <div className="blue-content-box">
                {/* 전기차 충전소 현황 메뉴 */}
                <div className={`charging-station-menu ${isChargingStationMenuOpen ? 'open' : ''}`}>
                    <a
                        href="/charging-stations"
                        aria-label="전기차 충전소 현황"
                        className="menu-item theme-dark"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleChargingStationMenu();
                        }}
                    >
                        전기차 충전소 현황
                    </a>
                    {/* 드롭다운 메뉴 */}
                    {isChargingStationMenuOpen && (
                        <div className="charging-station-submenu">
                            <div className="menu-box">
                                <a href="/nearby-stations" className="EV">
                                    인근 충전소
                                </a>
                                <a href="/charging-plans" className="EV">
                                    충전 계획
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* 회원가입 메뉴 */}
                <div className="signmenu">
                    <a href="/auth/signup" aria-label="회원가입" className="menu-item theme-dark">
                        회원가입
                    </a>

                {/* 로그인 메뉴 */}
                <a href="/login" aria-label="로그인" className="menu-item theme-dark">
                    로그인
                </a>
                </div>
            </div>
        </nav>
    );
}

export default NavigationMenu;
