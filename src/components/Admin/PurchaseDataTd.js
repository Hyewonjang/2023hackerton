import "../../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/LineIcons.3.0.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../assets/js/datatables-simple-demo.js";
import {DataTable} from "simple-datatables"

import { useEffect, useState } from "react";


function PurchaseDataTd({index, data, refundMoney, setRefundMoney, dummyPurchaseData, updateDummyPurchaseData}){


    //반품, 환불
    const [exchange, setExchange] = useState(0);
    const [exchangeDone, setExchangeDone] = useState(0);
    const [exchangeDisplay, setExchangeDisplay] = useState('block');
    const [refund, setRefund] = useState(0);
    const [refundDone, setRefundDone] = useState(0);
    const [refundDisplay, setRefundDisplay] = useState('block');
    const [insPurDone, setInsPurDone] = useState(0);
    const [payDone, setPayDone] = useState(0);
    // const [insPurDone, setInsPurDone] = useState(data[5]==="구매중"?0 : 1);
    // const [payDone, setPayDone] = useState(data[4]==="결제미완"? 0 : 1);


    // //반품, 환불 버튼 속성
    // const editRefundExchangeBtn = 
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
    

    //반품, 환불 버튼 관련 함수
    const exchangeButton = () => {
        if(exchange){
            setExchange(0);
        }
        else{
            setExchange(1);
        }
    }

    const refundButton = () => {
        if(refund){
            setRefund(0);
        }
        else{
            setRefund(1);
        }
    }

    const RefundFinButton = () => {
        if(!refundDone){
            setRefundDone(1);
            setRefundDisplay('none');
        }
    }

    const ExchangeFinButton = () => {
        if(!exchangeDone){
            setExchangeDone(1);
            setExchangeDisplay('none');
        }
    }

    const index_dataset = dummyPurchaseData[index];
    //const edit_index_dataset = index_dataset.slice(0,6).concat(editRefundExchangeBtn);
    // console.log("index",index);
    // console.log("dummyPurchaseData",dummyPurchaseData);
    // console.log("index_dataset",index_dataset);
    const [editData, setEditData] = useState(index_dataset);
    // const edit_data_refund = index_dataset.slice(0,4).concat('환불중', 
    //     <span>
    //         반품중
    //         <button className="btn btn-success btn-refund-fin" style={{display : refundDisplay, fontSize : "12px", padding:'2px'}} onClick={()=>{RefundFinButton();setRefundMoney(refundMoney+parseInt(data[3],10));}}>
    //             반품완료
    //         </button>
    //     </span>);
    const edit_data_refund = index_dataset.slice(0,4).concat('환불중', '반품중');
    const edit_data_refund_fin = index_dataset.slice(0,4).concat('환불완료', '반품완료');
    // const edit_data_exchange = index_dataset.slice(0,5).concat(
    //     <span>
    //         교환중
    //         <button className="btn btn-success btn-refund-fin" style={{display : exchangeDisplay, fontSize : "12px", padding:'2px'}} onClick={()=>{ExchangeFinButton()}}>
    //             교환완료
    //         </button>
    //     </span>);
    const edit_data_exchange = index_dataset.slice(0,4).concat("결제완료", "교환중");
    const edit_data_exchange_fin = index_dataset.slice(0,5).concat('교환완료');
    const edit_data_insPur_fin = index_dataset.slice(0,5).concat('구매완료');
    const edit_data_pay_fin = index_dataset.slice(0,4).concat('결제완료', index_dataset.slice(5,));
    const edit_data_fin = index_dataset.slice(0,4).concat('결제완료', '구매완료');

    //console.log("editData",editData);

    useEffect(()=>{
        if(refund && !refundDone){
            setEditData(edit_data_refund);
        }
        else if(refundDone){
            setEditData(edit_data_refund_fin);
        }
        else if(exchange && !exchangeDone){
            setEditData(edit_data_exchange);
        }
        else if(exchangeDone){
            setEditData(edit_data_exchange_fin);
        }
        else if(insPurDone && !payDone){
            setEditData(edit_data_insPur_fin);
        }
        else if(!insPurDone && payDone){
            setEditData(edit_data_pay_fin);
        }
        else{
            setEditData(edit_data_fin);
        }        

    }, [refund, refundDone, exchange, exchangeDone, insPurDone, payDone]);

    useEffect(()=>{
        // console.log("updateEditData", editData);
        // console.log("updateDummyPurchaseData", dummyPurchaseData.slice(0,index).concat([editData], dummyPurchaseData.slice(index+1,)));
        updateDummyPurchaseData(dummyPurchaseData.slice(0,index).concat([editData], dummyPurchaseData.slice(index+1,)));
    }, [editData])
    
    const delPurList = (index)=>{
        updateDummyPurchaseData(dummyPurchaseData.filter(purchase => dummyPurchaseData.indexOf(purchase,) != index));
        // console.log(dummyPurchaseData);
    };
    
    
    return(
        <tr style={{textAlign:'left'}}>
            <td style={{textAlign:'left'}}>{data[0]}</td>
            <td style={{textAlign:'left'}}>{data[1]}</td>
            <td style={{textAlign:'left'}}>{data[2]}</td>
            <td style={{textAlign:'left'}}>{data[3]}</td>
            <td style={{textAlign:'left'}}>{data[4]}</td>
            <td style={refund ? {textAlign: 'left', color : 'red', fontWeight:refundDone?'bold':'normal'}:{textAlign:'left'}} >
                {data[4]==='결제미완' ? <span style={{color:"red"}}>
                        {data[4]}
                        <button className="btn btn-success btn-refund-fin" style={{display : data[4]!="결제미완" ? "none":"block", fontSize : "12px", padding:'2px'}} onClick={()=>{setPayDone(1);setEditData(edit_data_pay_fin);}}>
                            결제완료
                        </button>
                    </span>
                    : <span style={data[5]=="반품중"||data[5]=="반품완료"||refund ? {textAlign: 'left', color : 'red', fontWeight:data[5]=="반품완료"||refundDone?'bold':'normal'}:{textAlign:'left'}}>
                        {data[4]}
                    </span>}
            </td>
            <td style={refund || exchange? {textAlign: 'left', color : 'red', fontWeight:exchangeDone || refundDone?'bold':'normal'}:{textAlign:'left'}}>
                {data[5]==='구매중' ?  
                    <span style={{color:"red"}}>
                        {data[5]}
                        <button className="btn btn-success btn-refund-fin" style={{display : data[5]!='구매중' ? "none":"block", fontSize : "12px", padding:'2px'}} onClick={()=>{setInsPurDone(1);setEditData(edit_data_insPur_fin);}}>
                            구매완료
                        </button>
                    </span>: data[5]==='반품중'?
                        <span style={{color:"red"}}>
                            반품중
                            <button className="btn btn-success btn-refund-fin" style={{display : refundDisplay, fontSize : "12px", padding:'2px'}} onClick={()=>{RefundFinButton();setRefundMoney(refundMoney+parseInt(data[3],10));}}>
                                반품완료
                            </button>
                        </span>:data[5]==="교환중"?
                        <span style={{color:"red"}}>
                            교환중
                            <button className="btn btn-success btn-refund-fin" style={{display : exchangeDisplay, fontSize : "12px", padding:'2px'}} onClick={()=>{ExchangeFinButton()}}>
                                교환완료
                            </button>
                        </span>
                        :<span style={data[5]=="반품완료"||data[5]=="교환완료"||refund || exchange? {textAlign: 'left', color : 'red', fontWeight:data[5]=="반품완료"||data[5]=="교환완료"||exchangeDone || refundDone?'bold':'normal'}:{textAlign:'left'}}>
                            {data[5]}
                        </span>}
            </td>
            <td>
                <button className={data[5]=="반품완료"||data[5]=="교환완료"||exchange ? "btn btn-secondary" : "btn btn-success"} id="btnNavbarSearch" type="button" style={{display:'inline-block', marginRight: '5px', marginBottom:'3px'}} 
                    onClick={()=>{exchangeButton();setRefund(0);setExchangeDone(0);setExchangeDisplay('block');}}
                    disabled={data[5]=="반품완료"||data[5]=="교환완료"||data[5]=="구매중"||data[4]=="결제미완"||exchangeDone||refundDone?'disabled':''}>
                        교환
                </button>
                <button className={data[5]=="반품완료"||refund ? "btn btn-secondary" : "btn btn-success"} id="btnNavbarSearch" type="button" style={{display:"inline-block", marginRight: '5px', marginBottom:'3px'}} 
                    onClick={()=>{refundButton(); setExchange(0);setRefundDone(0);setRefundDisplay('block');setExchangeDone(0);setExchangeDisplay('block');}} 
                    disabled={data[5]=="반품완료"||data[5]=="구매중"||data[4]=="결제미완"||refundDone?'disabled':''}>
                        반품
                </button>
                <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{display:'inline-block', marginRight: '5px', marginBottom:'3px'}} 
                        onClick={()=>{delPurList(index); }}>
                    삭제
                </button>                                             
            </td>
            {/* {RefundExchangeBtn} */}
            
        </tr>
        // <tr style={{textAlign:'left'}}>
        //     <td style={{textAlign:'left'}} index={data[0].toString()}>{data[0]}</td>
        //     <td style={{textAlign:'left'}} index={data[1].toString()}>{data[1]}</td>
        //     <td style={{textAlign:'left'}} index={data[2].toString()}>{data[2]}</td>
        //     <td style={{textAlign:'left'}} index={data[3].toString()}>{data[3]}</td>
        //     <td style={{textAlign:'left'}} index={data[4].toString()}>
        //         {refund ? 
        //             <span style={{color : 'red', fontWeight:refundDone?'bold':'normal'}}>
        //                 {refundDone? "환불완료": "환불중"}
        //             </span>
        //             : data[4]}
        //     </td>
        //     <td style={{textAlign:'left'}} index={data[5].toString()}>
        //         {refund ? 
        //             <span style={{color : 'red', fontWeight:refundDone?'bold':'normal'}}>
        //                 {refundDone? "반품완료": "반품요청중"}
        //                 <button className="btn btn-success btn-refund-fin" style={{display : refundDisplay, fontSize : "12px", padding:'2px'}} onClick={()=>{RefundFinButton();setRefundMoney(refundMoney+cost); console.log(data);}}>
        //                     반품완료
        //                 </button>
        //             </span> 
        //             : (exchange ? 
        //                 <span style={{color : 'red', fontWeight:exchangeDone?'bold':'normal'}}>
        //                     {exchangeDone ? '교환완료' : '교환요청중'}
        //                     <button className="btn btn-success btn-refund-fin" style={{display : exchangeDisplay, fontSize : "12px", padding:'2px'}} onClick={()=>{ExchangeFinButton()}}>
        //                         교환완료
        //                     </button>
        //                 </span> 
        //                 : data[5])}
        //     </td>
        //     <td>
        //         <button className={exchange ? "btn btn-secondary" : "btn btn-success"} id="btnNavbarSearch" type="button" style={{display:'inline-block', marginRight: '5px', marginBottom:'3px'}} 
        //             onClick={()=>{exchangeButton();setRefund(0);setExchangeDone(0);setExchangeDisplay('block');}}
        //             disabled={exchangeDone||refundDone?'disabled':''}>
        //                 교환
        //         </button>
        //         <button className={refund ? "btn btn-secondary" : "btn btn-success"} id="btnNavbarSearch" type="button" style={{display:"inline-block"}} 
        //             onClick={()=>{refundButton(); setExchange(0);setRefundDone(0);setRefundDisplay('block');setExchangeDone(0);setExchangeDisplay('block');}} 
        //             disabled={refundDone?'disabled':''}>
        //                 반품
        //         </button>                                            
        //     </td>
        // </tr>
    );
    
    
};

export default PurchaseDataTd;