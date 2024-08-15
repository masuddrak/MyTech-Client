import { useState } from "react";

const PaymentCart = ({inputValue}) => {
    const [activePayment, setActivePayment] = useState("")
    const handelPayment = (inputRedio) => {
        // setActivePayment(isActive)
        setActivePayment(inputRedio)
    }
    console.log(activePayment)
    // const hadelRadio=()=>{
    //     console.log("hello")
    // }
    return (
        <div className={`border-[1px] border-black p-3 flex gap-2 items-center cursor-pointer my-3 ${activePayment && "border-red-700"} `} onClick={()=>handelPayment(inputValue)}>
            <input type="radio" className="rounded-full p-2 border-[1px] bg-red-700" name="hello" value={inputValue} id="" onChange={()=>setActivePayment(activePayment)}/>
            <div className="">
                <p><span className="font-semibold">30,000<span className="font-extrabold text-sm">৳</span></span></p>
                <p>Cash Discount Price</p>
                <p>Online / Cash Payment</p>
            </div>
        </div>
    );
};

export default PaymentCart;