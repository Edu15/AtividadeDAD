import style from "./Time.module.css"
import React, { useState, useEffect } from 'react';
function Time(){
    return(
        <div className={style.times}>
            <div>
                <p className={style.title}>Days</p>
                <h1 className={style.number}>01</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Hours</p>
                <h1 className={style.number}>04</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Minutes</p>
                <h1 className={style.number}>34</h1>
            </div>
            <p className={style.twopoints}>:</p>
            <div>
                <p className={style.title}>Seconds</p>
                <h1 className={style.number}>46</h1>
            </div>
        </div>
    )
}
export default Time;