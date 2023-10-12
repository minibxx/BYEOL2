"use client"
import React from 'react'
import '../style/Picklist.scss'

function PickOne() {
  return (
    <div className='home'>

                <div className='card-title'>김예솔 공주님을 기다리는 사람들입니다. </div>
                <div className='card-align'>
                    <div className='card' onClick={onPick}>
                        <img src="../imges/main.png" />
                        <div>이름 (나이)</div>
                    </div>
                    <div className='card'>
                        <img src="../imges/main.png" />
                        <div>이름 (나이)</div>
                    </div>
                    <div className='card'>
                        <img src="../imges/main.png" />
                        <div>이름 (나이)</div>
                    </div>
                    <div className='card'>
                        <img src="../imges/main.png" />
                        <div>이름 (나이)</div>
                    </div>
                </div>

            </div>
  )
}

export default PickOne