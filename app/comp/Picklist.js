"use client"
import React from 'react'
import Picklist from '../pages/picklist/picklist.module.scss'
import PickOne from './PickOne'
import Contact from './Contact'

function picklist() {
    const onPick = () => {

    }
    return (
        <>
            <div className={Picklist.home}>

                <div className={Picklist.cardtitle}>김예솔 공주님을 기다리는 사람들입니다. </div>
                <div className={Picklist.cardalign}>
                    <div className={Picklist.card} onClick={onPick}>
                        <img src="../imges/main.png" />
                        <div>민유빈 (나이)</div>
                    </div>
                    <div className={Picklist.card} onClick={onPick}>
                        <img src="../imges/main.png" />
                        <div>김예솔 (나이)</div>
                    </div>
                    
                    <div className={Picklist.card} onClick={onPick}>
                        <img src="../imges/main.png" />
                        <div>김주선 (나이)</div>
                    </div>
                    
                    <div className={Picklist.card} onClick={onPick}>
                        <img src="../imges/main.png" />
                        <div>홍석현 (나이)</div>
                    </div>
                    
                </div>
                <div className={Picklist.loading}>
                    <img src='../imges/loading.gif'/>
                </div>
            </div>
            <PickOne/>
            <Contact/>
        </>
    )
}

export default picklist