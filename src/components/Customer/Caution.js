import AskModal from "./AskModal";
import styles from "../../assets/css/Caution.module.css";
import img11 from "../../img/caution1-1.PNG";
import img12 from "../../img/caution1-2.PNG";
import img21 from "../../img/caution2-1.PNG";
import img22 from "../../img/caution2-2.PNG";
import img23 from "../../img/caution2-3.PNG";
import img31 from "../../img/caution3-1.PNG";
import img32 from "../../img/caution3-2.PNG";
import img33 from "../../img/caution3-3.PNG";

function Caution() {
    return <div>
        <div className={styles.header}>
            <h1>LOGO</h1>
        </div>
        <div className={styles.banner}>유의사항</div>
        <div>
            <span className={styles.topic}>반품 배송비</span>
            <div className={styles.caution_imgs}>
                <img src={img11} className={styles.caution_img} />
                <img src={img12} className={styles.caution_img} />
            </div>
            <p className={styles.detail}>
                <strong>1. 단순 변심인 경우</strong> {'\n'}
                {'     '}- 최초 배송비를 포함한 왕복 배송비가 발생합니다. {'\n'}
                {'     '}- 무료배송 상품을 반품 시, 반품비는 고객부담합니다. {'\n'}
                {'     '}- 도서/산간 지역이거나 설치상품을 반품 시, 추가비용이 발생할 수 있습니다. {'\n'}
                <strong>2. 상품의 불량 또는 오배송인 경우</strong> {'\n'}
                {'     '}- 반품비용이 발생하지 않습니다. {'\n'}
            </p>
        </div>
        <div>
            <span className={styles.topic}>취소/반품이 안 되는 경우</span>
            <div className={styles.caution_imgs}>
                <img src={img21} className={styles.caution_img} />
                <img src={img22} className={styles.caution_img} />
                <img src={img23} className={styles.caution_img} />
            </div>
            <p className={styles.detail}>
                - <strong>단순변심으로 인한 취소/반품</strong> 시, 배송완료 이후 7일이 지난 경우 취소/반품이 불가능합니다. {'\n'}
                - <strong>주문/제작 상품을 취소</strong> 시, 상품의 제작이 이미 진행된 경우에는 취소가 불가능합니다. {'\n'}
                - <strong>구성품을 분실하거나 취급 부주의로 인한 파손/고장/오염</strong>이 있을 시, 취소/반품이 제한될 수 있습니다. {'\n'}
                - 제조사의 사정(신모델 출시 등) 및 부품 가격변동 등에 의해 <strong>가격이 변동될 수 있으며</strong>, 이로 인한 반품 및 가격보상은 불가능합니다. {'\n'}
                - <strong>뷰티 상품 이용 시</strong> 트러블(알러지, 붉은 반점, 가려움, 따가움)이 발생하는 경우, 진료 확인서 및 소견서 등을 증빙하면 반품이 가능합니다. (이 경우, 제반 비용은 고객님께서 부담하셔야 합니다.)
            </p>
        </div>
        <div>
            <span className={styles.topic}>환불 소요 기간</span>
            <div className={styles.caution_imgs}>
                <img src={img31} className={styles.caution_img} />
                <img src={img32} className={styles.caution_img} />
                <img src={img33} className={styles.caution_img} />
            </div>
            <p className={styles.detail}>
                - <strong>신용/체크카드</strong>: 카드사에서 확인 절차를 거치는 관계로 <strong>영업일 기준 3~7일 이내</strong> 환불처리가 완료됩니다. {'\n'}
                - <strong>휴대폰 결제</strong>: <strong>영업일 기준 평균 3일 이내</strong> 취소(환불)완료 후 당일 한도가 복구됩니다. {'\n'}
                - <strong>무통장 입금</strong>: <strong>영업일 기준 평균 3일 이내</strong>에 요청하신 계좌로 환불됩니다. {'\n'}
            </p>
        </div>
        <AskModal />
    </div>
};

export default Caution;