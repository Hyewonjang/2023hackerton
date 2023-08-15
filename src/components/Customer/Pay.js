import { useNavigate } from "react-router-dom";
import { React, useState } from 'react';
import '../../assets/css/Pay.css';

const Pay = () => {
    const navigate = useNavigate();
    const goToCharge = () => {
        navigate("/charge");
    }
    const goToHome = () => {
        navigate("/");
    }
    const paymethod = [
        '신용/체크카드',
        '무통장입금',
        '네이버페이',
        '카카오페이'
    ];
    const [method, setMethod] = useState('');
    const handleClick = () => {
        setMethod();
        // 버튼 선택
    };
    return (
        <div>
            <div className="Pay-header" onClick={goToHome}>
                LOGO for customer
            </div>
            <div className="Pay-topbox">
                충전 결제
            </div>
            <button className="Pay-back" onClick={goToCharge}>
                뒤로가기
            </button>
            <div className="Pay-amount">
                <div className="Pay-amount-title">
                    결제 금액
                </div>
                <div className="Pay-amount-box">
                    <input className="Pay-amount-input" type="number"/>
                    <input className="Pay-amount-input" type="number" min="0"/>
                    <p className="Pay-amount-won">원</p>
                </div>       
            </div>
            <div className="Pay-boundary"/>
            <div className="Pay-method">
                <div className="Pay-method-title">
                    결제 수단
                </div>
                <div className="Pay-method-ubuttons">
                    <button className="Pay-method-card" onClick={handleClick}>
                        {paymethod[0]}
                    </button>
                    <button className="Pay-method-nobook" onClick={handleClick}>
                        {paymethod[1]}
                    </button>
                </div>
                <div className="Pay-method-dbuttons">
                    <button className="Pay-method-naver" onClick={handleClick}>
                        {paymethod[2]}
                    </button>
                    <button className="Pay-method-kakao" onClick={handleClick}>
                        {paymethod[3]}
                    </button>
                </div>
            </div>
            <div className="Pay-boundary"/>
            <div className="Pay-info">
                <div className="Pay-info-top">
                    <div className="Pay-info-title">
                        결제 정보
                    </div>
                    <div className="Pay-info-again">
                        이름과 전화번호를 한 번 더 확인해주세요!
                    </div>
                </div>
                <div className="Pay-info-bottom">
                    <div className="Pay-info-name">
                        <div className="Pay-info-nametag">
                            이름
                        </div>
                        <div className="Pay-info-nameinput">
                            김OO
                        </div>
                    </div>
                    <div className="Pay-info-number">
                        <div className="Pay-info-numbertag">
                            전화번호
                        </div>
                        <div className="Pay-info-numberinput">
                            01012345678
                        </div>
                    </div>
                </div>
            </div>
            <div className="Pay-boundary"/>
            <div className="Pay-balance">
                <div className="Pay-balance-ment">
                    충전 후 잔액
                </div>
                <div className="Pay-balance-money">
                    20,000 원
                </div>
            </div>
            <button className="Pay-pay">
                결제하기
            </button>
            
        </div>
    );
};
export default Pay;