import Drawer from "./Drawer"
import {useState} from "react"
import HeadlessSlideOver from "../category/HeadlessSlideOver"
const Status =({screen})=>{
    const [openId, setOpenId] = useState(0)
    const [status, setStatus] = useState(false)
    const handleOnClose = (id) => {
      setOpenId(id)
      setStatus(true)
    }
    return(
        <div className={screen=== "mobile"? "mt-8 lg:hidden":"mt-8 hidden lg:flex justify-between"}>
            <div className="mb-4 lg:m-0"
             onClick={() => handleOnClose(1)}
            >
              <button className="flex gap-x-2 text-gray-500 hover:text-black">
                <svg fill="none" focusable="false" width="29" height="24" className="" viewBox="0 0 29 24">
                  <path d="M4 3H20V8M20 17H11.68C11.68 17 11 16 10 16M20 17V8M20 17H22.32M20 8H26.5L28 12.5V17H25.68C25.68 17 25 16 24 16M24 16C25 16 26 17 26 18C26 19 25 20 24 20C23 20 22 19 22 18C22 17.6527 22.1206 17.3054 22.32 17M24 16C23.3473 16 22.6946 16.426 22.32 17M10 16C11 16 12 17 12 18C12 19 11 20 10 20C9 20 8 19 8 18C8 17.6527 8.12061 17.3054 8.31996 17M10 16C9.3473 16 8.69459 16.426 8.31996 17M8.31996 17H4M10 12H3M10 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <div className="underline">Shipping &amp; Returns</div></button>
            </div>
            {openId === 1 && (
            <HeadlessSlideOver
              open={status}
              setOpen={setStatus}
              current= {[<div className="flex gap-x-2" key="1"><svg fill="none" focusable="false" width="29" height="24" className="" viewBox="0 0 29 24">
              <path d="M4 3H20V8M20 17H11.68C11.68 17 11 16 10 16M20 17V8M20 17H22.32M20 8H26.5L28 12.5V17H25.68C25.68 17 25 16 24 16M24 16C25 16 26 17 26 18C26 19 25 20 24 20C23 20 22 19 22 18C22 17.6527 22.1206 17.3054 22.32 17M24 16C23.3473 16 22.6946 16.426 22.32 17M10 16C11 16 12 17 12 18C12 19 11 20 10 20C9 20 8 19 8 18C8 17.6527 8.12061 17.3054 8.31996 17M10 16C9.3473 16 8.69459 16.426 8.31996 17M8.31996 17H4M10 12H3M10 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>Shipping & Returns</div>]}
            >
              <div className="flex flex-col" >
               <Drawer statusPro={
                [<div  key="1">
                  <p className="mb-8">
  <strong>
    Shipping
    <br />
  </strong>
  We deliver your parcel within 2–3 working days. As soon as your
  package has left our warehouse, you will receive a confirmation by
  email. This confirmation contains a tracking number that you can use
  to find out where yoShippingur package is.
</p>
<p>
  <strong>
    Returns
    <br />
  </strong>
  We offer free returns within 30 days. All you have to do is fill out
  the return slip that you received in your package and stick the
  prepaid label on the package.
  <br />
  Please note that it can take 2 weeks for us to process your return.
  We will do our best to complete this process as soon as possible.
</p>
</div> ]}/>
              </div>
            </HeadlessSlideOver>
          )}
            <div className="my-4  lg:m-0" onClick={() => handleOnClose(2)}>
              <button className="flex gap-x-2 text-gray-500 hover:text-black">
                <svg fill="none" focusable="false" width="24" height="24" className="" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M16 8H21V22H3V8H8M16 8C16 8 16 7.6 16 6C16 4 14.5 2 12 2C9.5 2 8 4 8 6C8 7.6 8 8 8 8M16 8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg><div className="underline">Secure Payment</div></button>
            </div>
            {openId === 2 && (
            <HeadlessSlideOver
              open={status}
              setOpen={setStatus}
              current= {[<div className="flex gap-x-2" key="2"> <svg fill="none" focusable="false" width="24" height="24" className="" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M16 8H21V22H3V8H8M16 8C16 8 16 7.6 16 6C16 4 14.5 2 12 2C9.5 2 8 4 8 6C8 7.6 8 8 8 8M16 8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>Secure Payment</div>]}
            >
              <div className="flex flex-col" >
               <Drawer statusPro={
                [<div key="2">
                  <p>
  <strong>
    Shipping
    <br />
  </strong>
  We deliver your parcel within 2–3 working days. As soon as your
  package has left our warehouse, you will receive a confirmation by
  email. This confirmation contains a tracking number that you can use
  to find out where your package is.
</p>

</div> ]}/>
              </div>
            </HeadlessSlideOver>
          )}
            <div className="my-4  lg:m-0" onClick={() => handleOnClose(3)}>
              <button className="flex gap-x-2 text-gray-500 hover:text-black">
                <svg fill="none" focusable="false" width="24" height="24" className="" viewBox="0 0 24 24">
                  <path d="M21 8V5H3V8M21 8V19H3V8M21 8L12 12.5L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg><div className="underline">Customer Service</div></button>
                </div>
            {openId === 3 && (
            <HeadlessSlideOver
              open={status}
              setOpen={setStatus}
              current= {[<div className="flex gap-x-2" key="3"><svg fill="none" focusable="false" width="24" height="24" className="" viewBox="0 0 24 24">
              <path d="M21 8V5H3V8M21 8V19H3V8M21 8L12 12.5L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>Customer Service</div>]}
            >
              <div className="flex flex-col" >
               <Drawer statusPro={
                [<div  key="3">
                  <p>
  We deliver your parcel within 2–3 working days. As soon as your
  package has left our warehouse, you will receive a confirmation by
  email. This confirmation contains a tracking number that you can use
  to find out where your package is.
</p>

</div> ]}/>
              </div>
            </HeadlessSlideOver>
          )}

</div>
    )
}
export default Status;