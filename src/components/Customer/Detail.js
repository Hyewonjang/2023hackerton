import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from "../../data/data.json";
import styles from "../../assets/css/Detail.module.css";
import { Link } from "react-router-dom";
import user_profile from "../../img/user_profile.png";

function Detail(){
    const {id} = useParams();

    const [detail, setDetail] = useState([]);
    useEffect(() => {
        setDetail(data.md.clothes);
    }, []);

    for (var i=0; i<detail.length; i++){
        if (`${id}` == detail[i]["id"]) {
            return <div>
                <div className={styles.header}>
                    <h1>LOGO</h1>
                </div>
                <div className={styles.user_info}>
                    <div>
                        <img src={user_profile} alt="" width="100px" height="100px" />
                    </div>
                    <div>
                        <p className={styles.ps}><strong>이름</strong>: 홍길동</p>
                        <p className={styles.ps}><strong>전화번호</strong>: 010-1234-5678</p>
                        <p className={styles.ps}><strong>주소</strong>: 서울특별시 종로구 성균관로 25-2 (성균관대학교)</p>
                    </div>
                </div>

                <div className={styles.left}>
                    <img src={detail[i]["img"]} alt={detail[i]["title"]} className={styles.detail_img}/>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>{detail[i]["title"]}</p>
                    <hr />
                    <p className={styles.price}>\ {detail[i]["price"]}원</p>
                    <p className={styles.label}>색상</p>
                    <p className={styles.color_code}>{detail[i]["color"]}</p>

                    <button className={styles.buyBtn}><Link to={'/info'}>
                        전화로 주문하기
                    </Link></button>
                    <br />
                    <button className={styles.visitBtn}><a href="https://www.coupang.com/" target='_blank'>
                        <span className={styles.visitBtnWhite}>웹사이트 방문하기</span>
                    </a></button>
                </div>
            </div>
        }
    }
}

export default Detail;