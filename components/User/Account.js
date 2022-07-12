import Edit from './Edit'
import React,{useState} from 'react'

const user = {
  name: 'Debbie Lewis',
  handle: 'deblewis',
  email: 'debbielewis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}
const Account = () => {
  const[edit, setEdit]= useState(false)

  return (
    <div className="bg-white">
      <div className=" w-full mb-10 px-4">
        {!edit ?(
          <div>
        <div className="flex flex-col sm:grid sm:grid-cols-2  gap-y-8 sm:gap-y-40 sm:mt-10 gap-x-6 py-6">
          <div className="flex flex-col ">
            <div>
              <h2 className="font-semibold mb-6 font-Orpheu font-medium tracking-wide text-xl">
                CONTACT INFORMATION
              </h2>
              <p className="font-light">{user.name}</p>
              <p className="font-light">{user.email}</p>
            </div>
            <div className="flex ">
              <button className="text-lg mr-4 flex items-center justify-center p-2 border border-transparent  font-medium rounded-md shadow-sm text-white bg-maroon hover:bg-maroon sm:px-8  mt-2.5">
                Change Password
              </button>

            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="font-semibold mb-6 font-Orpheu font-medium text-xl tracking-wide ">
                NEWSLETTERS
              </h2>
              <p>You don&apos;t subscribe to our newsletter.</p>

              <p className="sm:invisible hidden sm:block">none</p>
            </div>
            <div className="flex sm:h-16 h-[55px] mt-0 mr-4 sm:-mt-4">

              <button className="text-lg flex py-4 px-8 items-center justify-center border border-maroon shadow-md font-medium rounded-md shadow-sm text-maroon bg-transparent hover:bg-[#fdf1f2]   mt-2.5" onClick={()=>setEdit(true)}>
                Edit
              </button>

            </div>
          </div>
        </div>
        <div className="w-full bg-[#e6e6e6] h-[2px]"></div>
        <h1 className="font-semibold mt-8 font-Orpheu font-medium tracking-wide text-xl">
          ADDRESS BOOK
        </h1>
        <div className="flex flex-col sm:grid sm:grid-cols-2  gap-y-8 sm:gap-y-40 sm:my-4 gap-x-6 py-6">
          <div className="flex flex-col ">
            <div>
              <h2 className="font-semibold mb-2 font-Orpheu font-medium tracking-wide text-xl">
                Default Billing Address
              </h2>
              <div className="w-full bg-[#c49a6c] h-[2px] mb-4"></div>
                 <span>Debbie Lewis</span><br/>
              <span>B-99, street number -76 , Gandhi Nagar</span><br/>
              <span>new delhi, Delhi, 110053</span><br/>
              <span>India</span>
            </div>
            <div className="flex ">
              <button className="text-lg mr-4 flex items-center justify-center p-2 border border-transparent  font-medium rounded-md shadow-sm text-white bg-maroon hover:bg-maroon sm:px-8  mt-2.5">
              Manage Addresses
              </button>

            </div>
          </div>
          <div className="flex flex-col ">
            <div>
              <h2 className="font-semibold mb-2 font-Orpheu font-medium tracking-wide text-xl">
                Default Shipping Address
              </h2>
              <div className="w-full bg-[#c49a6c] h-[2px] mb-4"></div>
                 <span>Debbie Lewis</span><br/>
              <span>B-99, street number -76 , Gandhi Nagar</span><br/>
              <span>new delhi, Delhi, 110053</span><br/>
              <span>India</span>
            </div>

          </div>
        </div>
        </div>):(
          <div>
          <Edit/>
          <div className="flex px-2">
          <button className="text-lg mr-4 flex items-center justify-center p-2 border border-transparent  font-medium rounded-md shadow-sm text-white bg-maroon hover:bg-maroon sm:px-8  mt-2.5" onClick={()=>setEdit(false)}>
            Save
          </button>
          <button className="text-lg flex items-center justify-center p-2 border border-maroon shadow-md font-medium rounded-md shadow-sm text-maroon bg-transparent hover:bg-[#fdf1f2] sm:px-8  mt-2.5"  onClick={()=>setEdit(false)}>
            Go Back
          </button>
        </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Account
