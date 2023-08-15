import img from "../../img/image1.png";
import { Link } from "react-router-dom";
import styles from "../../assets/css/BuyList.module.css";

function BuyList(){
    return <div className={styles.outline}>
        <div className={styles.header}>
            <h1>LOGO</h1>
        </div>
        <div className={styles.banner}>구매내역</div>
        <div className={styles.buy_list}>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼1</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼2</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼3</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼4</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼5</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼6</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼7</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼8</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
        </div>
    </div>
}

export default BuyList;