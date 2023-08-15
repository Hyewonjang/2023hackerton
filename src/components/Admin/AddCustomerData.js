import "../../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/LineIcons.3.0.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../assets/js/datatables-simple-demo.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddCustomerData({setACDDisplay, setUpdateDone, setName, setPhoneNum, setAddress, setRestMoney}){

    const [name, setName2] = useState("");
    const [phoneNum, setPhoneNum2] = useState("");
    const [address, setAddress2] = useState("");
    const [restMoney, setRestMoney2] = useState(0);

    // const navigate = useNavigate();
    // const addDummyCusData = () => {
    //     navigate('/customerlist', {
    //         state: {
    //           name : name,
    //           phoneNum: phoneNum,
    //           address : address,
    //           restMoney : restMoney
    //         },
    //     });
    // }

    return(
        //<div id="layoutAuthentication_content" style={{marginBottom:"50px"}}>
            <div className=" pop-up" id="container-fluid px-4" style={{zIndex:'1'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header">
                                    <h3 className="text-center font-weight-light my-4" style={{fontWeight:"bold"}}>
                                        고객 추가
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form> {/* "구매일자", "상품명", "배송지", "결제액", "결제상태", "구매대행" */}
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input className="form-control" id="inputPurchaseDate" type="text" placeholder="이름" onChange={(e)=>setName2(e.target.value)} />
                                                    <label for="inputPurchaseDate">이름</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input className="form-control" id="inputProduct" type="text" placeholder="전화번호" onChange={(e)=>setPhoneNum2(e.target.value)}/>
                                                    <label for="inputProduct">전화번호(000-0000-0000)</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="inputAddress" type="text" placeholder="주소(우편번호 포함)" onChange={(e)=>{setAddress2(e.target.value)}}/>
                                            <label for="inputAddress">주소</label>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input className="form-control" id="inputPrice" type="text" placeholder="남은 충전액(원)" onChange={(e)=>{setRestMoney2(e.target.value)}}/>
                                                    <label for="inputPassword">남은 충전액(원)</label>
                                                </div>
                                            </div>                                            
                                        </div>
                                        <div className="mt-4 mb-0">
                                            <div className="d-grid"><button className="btn btn-success btn-block btn-click" onClick={()=>{setACDDisplay(0);setUpdateDone(0);setName(name);setPhoneNum(phoneNum);setAddress(address);setRestMoney(restMoney);}}>추가</button></div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-center py-3" style={{cursor:"pointer"}} onClick={()=>{setACDDisplay(0);}}>
                                        <div className="small">취소</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        //</div>
    );
}

export default AddCustomerData;