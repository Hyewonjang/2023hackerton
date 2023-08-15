import { useNavigate } from "react-router-dom";
import React from 'react';
import List from './List';

import '../../assets/css/Charge.css';


const Charge = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/mypage");
    }

    const goToPay = () => {
        navigate("/pay");
    }

    const goToHome = () => {
        navigate("/");
    }

    return (
        <div>
            <div className="Ch-header" onClick={goToHome}>
                LOGO for customer
            </div>
            <div className="Ch-topbox">
                금액 충전하기
            </div>
            <button className="Ch-back" onClick={goBack}>
                뒤로가기
            </button>
            <div className="Ch-middlebox">
                <div className="Ch-boxleft">
                    <div className="Ch-balance">
                        현재 잔액
                    </div>
                    <div className="Ch-money">
                        10,000 원
                    </div>
                </div>
                <button className="Ch-button" onClick={goToPay}>
                    충전
                </button>
            </div>
            <div className="Ch-boundary"/>

            <div className="Ch-bottom">
                충전 및 사용 내역
            </div>
            <div className="Ch-list">
                <List />
            </div>
            
        </div>
    );
};

export default Charge;