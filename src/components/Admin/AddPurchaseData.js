import "../../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/LineIcons.3.0.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../assets/js/datatables-simple-demo.js";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";


function AddPurchaseData({setPurchaseDate, setProduct, setAddress, setPrice, setInsPurState, setPayState,
                            setSetDone, setAddCDDisplay, setUpdateDone, purchaseDate, product, address, price, insPurState, payState}){

    // const [purchaseDate, setPurchaseDate] = useState("");
    // const [product, setProduct] = useState("");
    // const [address, setAddress] = useState("");
    // const [price, setPrice] = useState("");

    // const [payState, setPayState] = useState("결제상태")
    const [psDropDownDisplay, setPsDropDownDisplay] = useState('none');

    // const [insPurState, setInsPurState] = useState("구매대행 상태");
    const [ipsDropDownDisplay, setIpsDropDownDisplay] = useState('none');

    const payStateDropDown = ()=>{
        if(psDropDownDisplay=='none'){
            setPsDropDownDisplay('block');
        }
        else{
            setPsDropDownDisplay('none');
        }
    };

    const insPayStateDropDown = ()=>{
        if(ipsDropDownDisplay=='none'){
            setIpsDropDownDisplay('block');
        }
        else{
            setIpsDropDownDisplay('none');
        }
    };


    return(
        <div id="layoutAuthentication_content" style={{marginBottom:"50px"}}>
            <div className="pop-up" id="container-fluid px-4" style={{zIndex:'1'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header">
                                    <h3 className="text-center font-weight-light my-4" style={{fontWeight:"bold"}}>
                                        구매내역 추가
                                    </h3>
                                </div>
                                <div className="card-body">
                                    {/* <form> "구매일자", "상품명", "배송지", "결제액", "결제상태", "구매대행" */}
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input className="form-control" id="inputPurchaseDate" type="text" placeholder="구매일자" onChange={(e)=>setPurchaseDate(e.target.value)} />
                                                    <label htmlFor="inputPurchaseDate">구매일자(0000-00-00)</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input className="form-control" id="inputProduct" type="text" placeholder="상품명" onChange={(e)=>setProduct(e.target.value)}/>
                                                    <label htmlFor="inputProduct">상품명</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="inputAddress" type="text" placeholder="배송지(우편번호 포함)" onChange={(e)=>{setAddress(e.target.value)}}/>
                                            <label htmlFor="inputAddress">배송지</label>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-4">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input className="form-control" id="inputPrice" type="text" placeholder="결제액(원)" onChange={(e)=>{setPrice(e.target.value)}}/>
                                                    <label htmlFor="inputPassword">결제액(원)</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <div className="paystate dropdown" id="payState">
                                                        <div className="form-control" style={{display:'flex', justifyContent:'space-around', padding:'16px', cursor:'pointer'}}
                                                            onClick={()=>{payStateDropDown()}}>
                                                            <span className="dropbtn_content">{payState}</span>
                                                            <i className="fas fa-caret-down" style={{paddingTop:'4px'}}/>
                                                        </div>
                                                        <div className="dropdown-menu dropdown-menu-end" style={{display:psDropDownDisplay, left:'1px'}}>
                                                            <div className="dropdown-item2" onClick={()=>{setPayState('결제미완'); setPsDropDownDisplay('none');}}>결제미완</div>
                                                            <hr className="dropdown-divider" />
                                                            <div className="dropdown-item2" onClick={()=>{setPayState('결제완료'); setPsDropDownDisplay('none');}}>결제완료</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-floating mb-3 mb-md-0">
                                                <div className="paystate dropdown" id="payState">
                                                        <div className="form-control" style={{display:'flex', justifyContent:'space-around', padding:'16px', cursor:'pointer'}}
                                                            onClick={()=>{insPayStateDropDown()}}>
                                                            <span className="dropbtn_content">{insPurState}</span>
                                                            <i className="fas fa-caret-down" style={{paddingTop:'4px'}}/>
                                                        </div>
                                                        <div className="dropdown-menu dropdown-menu-end" style={{display:ipsDropDownDisplay, left:'1px'}}>
                                                            <div className="dropdown-item2" onClick={()=>{setInsPurState('구매중'); setIpsDropDownDisplay('none');}}>구매중</div>
                                                            <hr className="dropdown-divider" />
                                                            <div className="dropdown-item2" onClick={()=>{setInsPurState('구매완료'); setIpsDropDownDisplay('none');}}>구매완료</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 mb-0">
                                            {/* <Link to={`/purchasehistorylist/${useParams().id}`}  */}
                                                {/* state= {{purchaseDate : purchaseDate, product : product, address : address, price : price,
                                                         payState : payState, insPurState : insPurState, url : "/addpurchasedata",}}> */}
                                                <div className="d-grid">
                                                    <button className="btn btn-success btn-block btn-click" onClick={()=>{setAddCDDisplay(0);setUpdateDone(0);setSetDone(1);}}>추가</button>
                                                </div>
                                            {/* </Link> */}
                                        </div>
                                    {/* </form> */}
                                </div>
                                <div className="card-footer text-center py-3" style={{cursor:"pointer"}} onClick={()=>{setAddCDDisplay(0);}}>
                                        <div className="small">취소</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPurchaseData;