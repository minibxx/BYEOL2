"use client"

import bord from '../pages/bord/bord.module.scss';


function Bord() {

    return (
        <>
            <section className={bord.board}>
                <ul className={bord.ul1}>
                    <li>
                        <p>
                            <span>[공지]</span> 서비스 중단 또는 장애 안내</p>
                        <div>
                            <p>서버 점검으로 인해 다음 주 토요일(2023.10.21) 1시간 동안 일시적으로 서비스 이용이 중단될 예정입니다. 불편을 드려 죄송합니다. </p>
                        </div>
                        <p>2023.10.11</p>
                    </li>
                    <li>
                        <p>
                            <span>[주요 공지]</span> 개인정보보호관련 안내</p>
                        <div>
                            <p>개인정보 보호를 더 강화하기 위해 이용약관을 업데이트했습니다. 새로운 정책은 [링크]에서 확인하실 수 있으며, 이에 동의하지 않을 경우 계정 이용이 일시 중지될 수 있습니다.</p>
                        </div>
                        <p>2023.10.15</p>
                    </li>
                    <li>
                        <p>
                            <span>[이벤트]</span> 10월 이벤트</p>
                        <div>
                            <p>10월 한 달 동안 특별한 이벤트로, 모든 신규 가입자에게 15% 할인 쿠폰을 제공합니다. 이 기회를 놓치지 마세요!</p>
                        </div>
                        <p>2023.10.01</p>
                    </li>
                    <li>
                        <p>
                            <span>[안내]</span> 화면 설정 옵션 안내</p>
                        <div>
                            <p>더 나은 이용 경험을 제공하기 위해 새로운 '다크 모드' 옵션을 도입했습니다. 이제 화면을 어두운 배경으로 전환하여 눈 건강에 더 나은 영향을 미칠 수 있습니다</p>
                        </div>
                        <p>2023.10.13</p>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Bord