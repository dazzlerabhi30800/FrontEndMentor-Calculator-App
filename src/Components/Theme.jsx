import React from 'react';
import './Style.css';

function Theme() {
    // function handleTheme(e){
    //     const index = e.target.dataset.index;
    //     const theme = document.querySelector('.theme--toggler');
    //     const slider = document.querySelector('.theme--toggler .circle');
    //     const states = document.querySelector('.states');
    //     const themeWidth = states.offsetWidth;
    //     // console.log(themeWidth)
    //     theme.style.width = themeWidth;
    //     if(index == 2) {
    //         slider.style.left = `${(index * 20) + 4}px`;
    //         document.body.classList.remove('light');
    //     }
    //     else {
    //         slider.style.left = `${(index * 17) + 5}px`;
    //     }
    // }

    const handleCircle = (e) => {
        // console.log(e.pageX);
        const themeToggler = document.querySelector('.theme--toggler');
        const circle = document.querySelector('.theme--toggler .circle');
        const xCoord  = e.pageX - themeToggler.offsetLeft;
        if(xCoord < 19) {
            circle.style.left = 4 + "px";
            document.body.classList.remove('light', 'contrast');
        }
        else if(xCoord >= 19 && xCoord < 41) {
            circle.style.left = 22 + "px";
            document.body.classList.remove('contrast');
            document.body.classList.add('light');
        }
        else{
            circle.style.left = 43 + "px";
            document.body.classList.remove('light');
            document.body.classList.add('contrast');
        }
    }
    return(
        <div className='theme--container'>
            <h1 className="heading">Calc</h1>
            <div className="theme--wrapper">
                <p>Theme</p>
                <div className="theme--switch">
                    <div className="states">
                        <span data-index="0">1</span>
                        <span data-index="1">2</span>
                        <span data-index="2">3</span>
                    </div>
                    <div className="theme--toggler" onClick={handleCircle}>
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theme;