import "../../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/LineIcons.3.0.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../assets/js/datatables-simple-demo.js";
import {DataTable} from "simple-datatables"
import { useState, useEffect } from "react";
import PurchaseDataTd from "./PurchaseDataTd";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import AddPurchaseData from "./AddPurchaseData";
import PurchaseData from "../../data/purchaseDataList.json";


function PurchaseHistoryList(props,){

    // dummyPurchaseData
    // const refundExchangeBtn = 
    // <td>
    //     <button className={exchange ? "btn btn-secondary" : "btn btn-success"} id="btnNavbarSearch" type="button" style={{display:'inline-block', marginRight: '5px', marginBottom:'3px'}} 
    //         onClick={()=>{exchangeButton();setRefund(0);setExchangeDone(0);setExchangeDisplay('block');}}
    //         disabled={exchangeDone||refundDone?'disabled':''}>
    //             교환
    //     </button>
    //     <button className={refund ? "btn btn-secondary" : "btn btn-success"} id="btnNavbarSearch" type="button" style={{display:"inline-block"}} 
    //         onClick={()=>{refundButton(); setExchange(0);setRefundDone(0);setRefundDisplay('block');setExchangeDone(0);setExchangeDisplay('block');}} 
    //         disabled={refundDone?'disabled':''}>
    //             반품
    //     </button>                                            
    // </td>;

    // <td>
    //     <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{display:'inline-block', marginRight: '5px', marginBottom:'3px'}} >
    //         교환
    //     </button>
    //     <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{display:"inline-block"}} >
    //         반품
    //     </button>                                            
    // </td>;

    // const [exchangeBtnClass,setExchangeBtnClass] = useState("");
    // const [refundBtnClass,setRefundBtnClass] = useState("");
    // const [exchangeBtnClick,setExchangeBtnClick] = useState(()=>{});
    // const [refundBtnClick,setRefundBtnClick] = useState(()=>{});
    // const [exchangeBtnDis,setExchangeBtnDis] = useState("");
    // const [refundBtnDis,setRefundBtnDis] = useState("");

    // const refundExchangeBtn = 
    // <td>
    //     <button className={exchangeBtnClass} id="btnNavbarSearch" type="button" style={{display:'inline-block', marginRight: '5px', marginBottom:'3px'}} 
    //         onClick={exchangeBtnClick}
    //         disabled={exchangeBtnDis}>
    //             교환
    //     </button>
    //     <button className={refundBtnClass} id="btnNavbarSearch" type="button" style={{display:"inline-block"}} 
    //         onClick={refundBtnClick} 
    //         disabled={refundBtnDis}>
    //             반품
    //     </button>                                            
    // </td>;
    const location = useLocation();
    const name = location.state.name;
    const phone = location.state.phone;
    const restMoney = location.state.restMoney;
    const cusIndex = location.state.index;

    const choicedCustomerBuyData = PurchaseData.PurchaseData.filter(data=>data.name == name);
    const [dummyPurchaseData, updateDummyPurchaseData] = useState(localStorage.getItem(name+"BuyData") != undefined ? JSON.parse(localStorage.getItem(name+"BuyData")):choicedCustomerBuyData[0].buyList);

    useEffect(()=>{
        const JsonCusData = JSON.stringify(dummyPurchaseData);
        localStorage.setItem(name+"BuyData", JsonCusData);
    },[dummyPurchaseData]);

    /* [
        ['2021-01-01', '중년여성 양말 세트', '서울시 OO구 OO로 11', 100000, '결제완료','구매완료'],
        ['2021-02-01', '중년 남성 조끼', '서울시 OO구 OO로 11', 50000, '결제완료','구매완료'],
        ['2021-03-01', '중장년 수면 바지', '서울시 xx구 OO로 23', 20000, '결제완료','구매완료'],
        ['2021-04-01', '중년 여성 모자(1+1)', '서울시 OO구 OO로 11', 15000, '결제완료','구매완료'],
        ['2021-05-01', '꽃무늬 바지', '서울시 OO구 OO로 11', 12000, '결제완료','구매완료'],
        ['2022-06-01', '여성 목수건', '서울시 OO구 OO로 11', 5000, '결제완료','구매완료'],
        ['2022-07-01', '중장년 여성 꽃무늬 스카프', '서울시 **구 OO로 46', 10000, '결제완료','구매완료'],
        ['2022-08-01', '수동 접이식 여성 레이스 양산', '서울시 OO구 OO로 11', 34000, '결제완료','구매완료'],
        ['2022-09-01', '생활건강용 사발 지팡이', '서울시 OO구 OO로 11', 28000, '결제완료','구매완료'],
        ['2023-02-01', '진동 안마기', '서울시 OO구 OO로 11', 54000, '결제완료','구매완료'],
        ['2023-04-01', '미끄럼방지 매트 10매', '서울시 OO구 OO로 11', 28000, '결제완료','구매완료'],
        ['2023-06-01', '폴라폴리스 무릎 담요', '서울시 OO구 OO로 11', 9000, '결제완료','구매완료'],
        ['2023-08-01', '고탄력 손목보호대 ', '서울시 OO구 xx로 88', 8000, '결제미완','구매중'],
    ] */

    const dummyColumns = ["구매번호","구매일자", "상품명", "배송지", "결제액", "결제상태","구매대행", "교환/환불"];

    const [purchaseDate, setPurchaseDate] = useState(0);
    const [product, setProduct] = useState();
    const [address, setAddress] = useState();
    const [price, setPrice] = useState();
    const [payState, setPayState] = useState("결제상태");
    const [insPurState, setInsPurState] = useState("구매대행상태");
    const [setDone, setSetDone] = useState(0);

    const [updateDone, setUpdateDone] = useState(0);
    // const PdSingleData = location.state;
    // // useEffect(()=>{
    // //     updateDummyPurchaseData(dummyPurchaseData.concat([PdSingleData.purchaseDate, PdSingleData.product, PdSingleData.address, PdSingleData.price, PdSingleData.payState, PdSingleData.insPurState]));
    // // },[location]);
    // console.log(PdSingleData.url)
    // if(!updateDone){
    //     updateDummyPurchaseData([...dummyPurchaseData,[PdSingleData.purchaseDate, PdSingleData.product, PdSingleData.address, PdSingleData.price, PdSingleData.payState, PdSingleData.insPurState]]);
    //     setUpdateDone(1);
    // } 

    console.log(payState);
    console.log(setDone &&!updateDone && purchaseDate && product && price && address && payState != "결제상태" && insPurState != "구매대행상태");

    if(setDone && !updateDone){
        updateDummyPurchaseData([...dummyPurchaseData,[purchaseDate, product, address, price, payState, insPurState]])
        setUpdateDone(1);
        setSetDone(0);
        setPayState("구매상태");
        setInsPurState("구매대행상태");
    }

    //console.log(dummyPurchaseData);

    useEffect(() => {
        const simpleDatatables = new DataTable('#datatablesSimple', {scrollY:"400px", paging: false, sortable:false});
    });

    const [division, setDivision] = useState('이름');
    const [divisionDisplay, setDivisionDisplay] = useState('none');
    //const [restRefundMoney, setRestRefundMoney] = useState(props.restMoney);
    const [restRefundMoney, setRestRefundMoney] = useState(restMoney ? restMoney:3000);
    const [addCDDisplay, setAddCDDisplay] = useState(0);

    const divisonToggle = () => {
        if (divisionDisplay === 'none'){
            setDivisionDisplay('block');
            //console.log(divisionDisplay);
        }
        else{
            setDivisionDisplay('none');
            //console.log(divisionDisplay);
        }
    };

    useEffect(()=>{
        const storedCusData = JSON.parse(localStorage.getItem("CustomerData"));
        storedCusData.splice(cusIndex, 1, storedCusData[cusIndex].slice(0,3).concat(restRefundMoney));
        const JsonCusData = JSON.stringify(storedCusData);
        localStorage.setItem("CustomerData", JsonCusData);
    },[restRefundMoney]);

    return(
        <div className="container-fluid px-4">
            <h1 className="mt-4" style={{textAlign:'left'}}>고객별 구매내역 목록</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active" style={{marginLeft:'5px'}}>Purchase History List</li>
            </ol>

            {/* 이름, 전화번호, 주소, 남은 충전액 뜨도록! */}

            <div className="card mb-4">
                <div className="card-header" style={{display:'flex', justifyContent: 'space-around'}}>
                    <div style={{width:"90%", fontSize:'20px',  paddingTop: '5px'}}>
                        <div style={{float:'left', fontWeight: 'bold'}}>{name ? name:"김성대"}</div>
                        <div style={{float:'left', paddingTop:'5px', marginLeft: '5px', fontSize:'15px'}}>(전화번호 : {phone ? phone:"010-1111-1111"})</div>
                        <div style={{float:'right', paddingTop:'3px', paddingRight: '5px', fontSize:'17px'}}>
                            남은 충전액 : <span style={{fontWeight:'bold', color:'red'}}>{restRefundMoney}</span>원
                        </div>
                    </div>
                    {/* <Link to={`/addpurchasedata/${useParams().id}`} > */}
                        <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{float: 'right'}} onClick={()=>{setAddCDDisplay(1)}}>추가</button>
                    {/* </Link> */}

                    {/* <form className="d-none d-md-block form-inline me-0 me-md-3 my-2 my-md-0" style={{width:'60%'}}>
                        <div className="input-group" style={{paddingBottom:'2px'}}>
                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch"/>
                            <button className="btn btn-primary" id="btnNavbarSearch" type="button" style={{backgroundColor:"green"}}><i className="fas fa-search"></i></button>
                        </div>
                    </form> */}
                </div>

                <div className="card-body">
                    <table id="datatablesSimple">
                        <thead>
                            <tr>
                                {dummyColumns.map((column)=>(
                                        <th key={column}>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                {dummyColumns.map((column, index)=>(
                                        <th key={index} >{column}</th>
                                ))}
                            </tr>
                        </tfoot>
                        <tbody>
                            {dummyPurchaseData.map((data, index)=>{
                                console.log(index,data);
                                return(
                                    <PurchaseDataTd key={index} index={index} data={data} refundMoney={restRefundMoney} setRefundMoney={setRestRefundMoney} dummyPurchaseData={dummyPurchaseData} updateDummyPurchaseData={updateDummyPurchaseData}/>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {addCDDisplay ? <AddPurchaseData 
                setPurchaseDate={setPurchaseDate} setProduct={setProduct} setPrice={setPrice} setAddCDDisplay={setAddCDDisplay}
                setAddress={setAddress} setPayState={setPayState} setInsPurState={setInsPurState} setUpdateDone={setUpdateDone}
                purchaseDate={purchaseDate} product={product} price={price} 
                address={address} payState={payState} insPurState={insPurState} setSetDone={setSetDone}/> : ""}
        </div>
    )

};

export default PurchaseHistoryList;