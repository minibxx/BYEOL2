"use client"
import React, { useEffect, useState} from 'react';
import community from '../pages/community/community.module.scss';
import axios from 'axios';



function Community() {
  const [activeIndices, setActiveIndices] = useState([]);

  const handleButtonClick = (index) => {
    // 현재 인덱스가 이미 선택되었는지 확인
    const indexSelected = activeIndices.includes(index);

    if (indexSelected) {
      // 이미 선택된 경우, 해당 인덱스를 제거
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      // 선택되지 않은 경우, 해당 인덱스를 추가
      setActiveIndices([...activeIndices, index]);
    }
  };

  const[data,setData] = useState([]);

  const getData= ()=>{
    axios.get('/api')
    .then(res=>{
      setData(res.data);
    })
  }


  useEffect(()=>{
    getData();
  },[])
  
  return (
    <>
      <section className={community.select}>
      <ul>
        {['#화', '#수', '#목', '#금', '#토', '#자유'].map((item, index) => (
          <li key={index}>
            <button
              className={`${community.select_item} ${activeIndices.includes(index) ? community.active : ''}`}
              onClick={() => handleButtonClick(index)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </section>

      <section className={community.community}>
        <ul className={community.ul2}>
         {
         data.map(obj=>(
         <li key={obj.num}>
            {/* <p><span>[#목]</span> 을사일주 남 성격 어떤가요?</p>
            
            <p>2023.10.11<span>155</span></p> */}

            {obj.title}
          </li>))}
        </ul>
      </section>
    </>
  )
}

export default Community