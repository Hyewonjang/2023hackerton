import { useState, useEffect } from "react";
import data from "../../data/data.json";
import Product from "./Product";
import styles from "../../assets/css/SellList.module.css";
import user_profile from "../../img/user_profile.png";

/* 텍스트 아이콘 사용 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function SellList(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data.md.clothes);
    }, []);

    return(
        //console.log(products)
        <div className={styles.outline}>
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
            <div className={styles.banner}>
                상품분류: 의복 {"   "}
                <FontAwesomeIcon icon={faCaretDown} /> 
            </div>
            <div className={styles.container}>
                <div className={styles.products}>
                    {products.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            img={product.img}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SellList;