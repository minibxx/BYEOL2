import React from 'react'
import Link from 'next/link'
function Footer() {
    return (
        <footer className='foot'>
            <img src='../imges/line.png' className='f-line'/>
            <div className='f-link'>
                <Link href='./pages/myfortune'className='f-a'>운세보기</Link>
                <Link href='./pages/matchlist' className='f-a'>리스트보기</Link>
                <Link href='./pages/picklist' className='f-a'>리스트보기</Link>
                <Link href='./pages/bord' className='f-a'>게시판</Link>
            </div>
        </footer>
    )
}

export default Footer