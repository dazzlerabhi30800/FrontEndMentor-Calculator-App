import React from 'react';
import './Style.css';

function Theme() {
    function handleTheme(e){
        const index = e.target.dataset.index;
        const theme = document.querySelector('.theme--toggler');
        const slider = document.querySelector('.theme--toggler .circle');
        const states = document.querySelector('.states');
        const themeWidth = states.offsetWidth;
        // console.log(themeWidth)
        theme.style.width = themeWidth;
        if(index == 2) {
            slider.style.left = `${(index * 20) + 4}px`;
        }
        else {
            slider.style.left = `${(index * 17) + 5}px`;
        }
    }
    return(
        <div className='theme--container'>
            <h1 className="heading">Calc</h1>
            <div className="theme--wrapper">
                <p>Theme</p>
                <div className="theme--switch">
                    <div className="states">
                        <span onClick={handleTheme} data-index="0">1</span>
                        <span onClick={handleTheme} data-index="1">2</span>
                        <span onClick={handleTheme} data-index="2">3</span>
                    </div>
                    <div className="theme--toggler">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theme;