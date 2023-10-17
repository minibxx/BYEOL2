"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react';
import write from '../pages/write/write.module.scss'
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Write() {
    
    const navigation = useRouter();
    const [activeIndex, setActiveIndex] = useState(null);

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };




    const insertWrite = (e) => {
       
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData);
        axios.post('/api', values);
        
        navigation.push('./bord');
    }




    return (
        <div className={write.write_main}>
            <section className={write.img}>
                <img src="../../imges/icon_pencil.png" />
                <Link href='./bord'>게시판돌아가기</Link>
            </section>

            <section className={write.select}>
                <div>
                    <p>말머리</p>
                </div>
                <ul>
                    {['#화', '#수', '#목', '#금', '#토', '#자유'].map((item, index) => (
                        <li className={write.five_buttons} key={index}>
                            <button
                                className={`${write.select_item} ${activeIndex === index ? write.active : ''}`}
                                onClick={() => handleButtonClick(index)}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
            <div>
                <form className={write.form} onSubmit={insertWrite} method='post' encType='multipart/form-data' >
                    <input className={write.title} type='text' name='title' placeholder='제목' />
                    <textarea placeholder='내용을 입력해주세요' name='contents'></textarea>
                    <input className={write.file} type='file' name ='img'/>
                    <button type='submit'>
                        <img src="../../imges/icon_submit_update.png" />
                    </button>
                </form>


            </div>
        </div>
    )
}

export default Write