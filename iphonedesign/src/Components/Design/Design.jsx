import React, { useState } from 'react';
import './design.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Design = () => {
    const [selectedIcon, setSelectedIcon] = useState(null);

    const change = (icon) => {
        setSelectedIcon(icon);
    }

    return (
        <div className='design_head'>
            <div className="iphoneFront ">
                <div className="frame"></div>
                <div className="antenas">
                    <div className="tt"></div>
                    <div className="tr"></div>
                    <div className="tl"></div>
                    <div className="bb"></div>
                    <div className="br"></div>
                    <div className="bl"></div>
                </div>
                <div className="keys">
                    <div className="silent"></div>
                    <div className="volt"></div>
                    <div className="volb"></div>
                    <div className="lock"></div>
                </div>
                <div className="screen">
                  <div className='top_screen'>
                        
                    <div className='span_div '>
                      <span className='span_top_screen'>FU</span>
                      <p className='hello' >Hello User</p>
                      <div><FontAwesomeIcon icon={faBell} className='icon_bell' /></div> 
                    </div>

                    <div className="island">
                      <div className="camera"></div> 
                    </div>
                        
                </div>
                    
                <div className='center_screen'>
                        {/* Center Screen you can edit */}
                    </div>
                    <div className='bottom_screen'>
                        <div className='inside_screen'>
                            <FontAwesomeIcon icon={faHouse} className={selectedIcon === faHouse ? 'fa-sharp' : 'fa-solid'} onClick={() => change(faHouse)} /> 
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={selectedIcon === faMagnifyingGlass ? 'fa-sharp' : 'fa-solid'} onClick={() => change(faMagnifyingGlass)} />
                            <FontAwesomeIcon icon={faQrcode} className={selectedIcon === faQrcode ? 'fa-sharp' : 'fa-solid'} onClick={() => change(faQrcode)} /> 
                            <FontAwesomeIcon icon={faImage} className={selectedIcon === faImage ? 'fa-sharp' : 'fa-solid'} onClick={() => change(faImage)} /> 
                            <FontAwesomeIcon icon={faGear} className={selectedIcon === faGear ? 'fa-sharp' : 'fa-solid'} onClick={() => change(faGear)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design;
