import "../../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/LineIcons.3.0.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../assets/js/datatables-simple-demo.js";
import {DataTable} from "simple-datatables"
import { useState, useEffect } from "react";
import { useLocation, NavLink , Link} from "react-router-dom";
import AddCustomerData from "./AddCustomerData";
import CustomerData from "../../data/customerData.json";

function CustomerList(){

    // dummyCustomerData       

    const [dummyCustomerData, updateDummyCustomerData] = useState(localStorage.getItem("CustomerData") != undefined ? JSON.parse(localStorage.getItem("CustomerData")): CustomerData.CustomerData);
    /*
    [
        ['김성대', '010-1111-1111', '서울시 OO구 OO로 11', 3000, phBtn],
        ['이멋사', '010-2222-2222', '서울시 OO구 OO로 22', 20000, phBtn],
        ['고사자', '010-3333-3333', '서울시 OO구 OO로 33', 50000, phBtn],
        ['서코딩', '010-4444-4444', '서울시 OO구 OO로 44', 40000, phBtn],
        ['허에러', '010-5555-5555', '서울시 OO구 OO로 55', 10000, phBtn],
        ['정서버', '010-6666-6666', '서울시 OO구 OO로 66', 5000, phBtn],
        ['시오류', '010-7777-7777', '서울시 OO구 OO로 77', 1000, phBtn],
        ['조리액', '010-8888-8888', '서울시 OO구 OO로 88', 7000, phBtn],
        ['함노드', '010-9999-9999', '서울시 OO구 OO로 99', 2000, phBtn],
        ['설해커', '010-0000-0000', '서울시 OO구 OO로 00', 9000, phBtn],
        ['안허브', '010-1212-1212', '서울시 OO구 OO로 12', 12000, phBtn],
        ['박디비', '010-1313-1313', '서울시 OO구 OO로 13', 15000, phBtn],

    ]
    */

    const dummyColumns = ["이름", "전화번호", "주소", "남은 충전액(원)", "구매내역 확인"];

    const location = useLocation();
    // const CusSingleData = { ...location.state };
    // if(CusSingleData){
    //     updateDummyCustomerData(...dummyCustomerData, 
    //         [CusSingleData.name, CusSingleData.phoneNum, CusSingleData.address, CusSingleData.restMoney]);
    // }

    // window.addEventListener('DOMContentLoaded', event => {
    //     // Simple-DataTables
    //     // https://github.com/fiduswriter/Simple-DataTables/wiki

        
    //     const simpleDatatables = new DataTable('#datatablesSimple');
    //     console.log(simpleDatatables);
    // });


    useEffect(() => {
        const simpleDatatables = new DataTable('#datatablesSimple', {scrollY:"400px", paging: false, sortable:false, searchCol:true});
    });

    const [division, setDivision] = useState('이름');
    const [divisionDisplay, setDivisionDisplay] = useState('none');
    const [ACDDisplay, setACDDisplay] = useState(0);

    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [address, setAddress] = useState("");
    const [restMoney, setRestMoney] = useState(0);
    const [updateDone, setUpdateDone] = useState(0);

    if(!updateDone && name && phoneNum && address){
        updateDummyCustomerData([...dummyCustomerData, [name, phoneNum, address, restMoney]]);
        const JsonPurData = JSON.stringify([]);
        localStorage.setItem(name+"BuyData", JsonPurData);
        setUpdateDone(1);
    }

    const divisonToggle = () => {
        if (divisionDisplay === 'none'){
            setDivisionDisplay('block');
            // console.log(divisionDisplay);
        }
        else{
            setDivisionDisplay('none');
            // console.log(divisionDisplay);
        }
    };

    const delCustomer = (index)=>{
        updateDummyCustomerData(dummyCustomerData.filter(customer => dummyCustomerData.indexOf(customer,) != index));
        console.log(dummyCustomerData);
    };

    useEffect(()=>{
        const JsonCusData = JSON.stringify(dummyCustomerData);
        localStorage.setItem("CustomerData", JsonCusData);
    },[dummyCustomerData]);

    return(
        <div className="container-fluid px-4">
            <h1 className="mt-4" style={{textAlign:'left'}}>고객목록</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active" style={{marginLeft:'5px'}}>CustomerList</li>
            </ol>

            <div className="card mb-4">
                <div className="card-header" style={{display:'flex', justifyContent: 'center'}}>
                    {/* <i className="fas fa-address-book me-1" style={{fontSize:'28px', position:'relative', top:'5px', paddingRight:'8px'}}></i>
                    
                    <div style={{position:'relative'}}>
                        <button className="btn2 me-2 dropdown-toggle" onClick={()=>divisonToggle()} >{division}</button>
                        
                        <ul className="collapse dropdown-menu2 dropdown-menu-end" style={{position:'absolute', top:'40px', left:'0px', fontSize:'13px', width:'50px', display:divisionDisplay}}>
                            <li className="dropdown-item2" style={{textAlign:'left'}}><button style={{backgroundColor:'transparent', border:'none'}} onClick={()=>{setDivision("이름"); setDivisionDisplay('none');}}>이름</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className="dropdown-item2" style={{textAlign:'left'}}><button style={{backgroundColor:'transparent', border:'none'}} onClick={()=>{setDivision("전화번호"); setDivisionDisplay('none');}}>전화번호</button></li>
                        </ul>                    
                    </div> */}
                    
                    {/* <Link to='/addcustomerdata' style={{float: 'right', marginLeft: '93%'}}> */}
                        <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{float: 'right', marginLeft: '93%'}}
                            onClick={()=>{setACDDisplay(1);}}>추가</button>
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
                                        // <th key={column} >{column}<i className="fas fa-sort" style={{paddingLeft:'5px'}}></i></th>
                                        <th key={column} >{column}</th>
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
                            {dummyCustomerData.map((data, index)=>{
                                console.log(index);
                                return(
                                    <tr style={{textAlign:'left'}}>
                                        <td style={{textAlign:'left'}} key={data[0].toString()}>{data[0]}</td>
                                        <td style={{textAlign:'left'}} key={data[1].toString()}>{data[1]}</td>
                                        <td style={{textAlign:'left'}} key={data[2].toString()}>{data[2]}</td>
                                        <td style={{textAlign:'left'}} key={data[3].toString()}>{data[3]}</td>
                                        <td style={{textAlign:'left'}} key={index}>
                                            <Link to={`/admin/purchasehistorylist/${index}`} state= {{name: data[0], phone: data[1], restMoney : parseInt(data[3],10), index : index}}>
                                                <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{display:'inline-block', marginRight: '5px', marginBottom:'3px', width:'130px'}} >
                                                    구매내역 확인
                                                </button>
                                            </Link>
                                            <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{display:'inline-block', marginRight: '5px', marginBottom:'3px'}} 
                                                    onClick={()=>{delCustomer(index); }}>
                                                삭제
                                            </button>                                            
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {ACDDisplay ? 
                <AddCustomerData setACDDisplay={setACDDisplay} setUpdateDone={setUpdateDone}
                    setName={setName} setAddress={setAddress} setPhoneNum={setPhoneNum} setRestMoney={setRestMoney}/> : ""}
        </div>
    )

};

export default CustomerList;