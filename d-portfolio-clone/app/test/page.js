import React from 'react'

const test = () => {
  return (
    <div className=" flex items-start justify-around ">
        <div className="cards flex justify-center  flex-col border-r-2 items-start border-white overflow-auto">
            {/* Cards content */}
            <div className="card size-80 border-red-200 border "></div>
            <div className="card size-80 border-red-200 border "></div>
            <div className="card size-80 border-red-200 border "></div>
            <div className="card size-80 border-red-200 border "></div>
            <div className="card size-80 border-red-200 border "></div>
            <div className="card size-80 border-red-200 border "></div>
            <div className="card size-80 border-red-200 border "></div>
            <div className="card size-80 border-red-200 border "></div>
            <div className="card size-80 border-red-200 border "></div>
            <div className="card size-80 border-red-200 border "></div>
            <div className="card size-80 border-red-200 border "></div>
        </div>
        
        {/* Side Nav */}
        <div className="side bg-white w-full sticky top-0 ">
            <nav className=" bg-white w-full">
                <ul className='flex justify-center items-center gap-10 bg-white'>
                    <li>Home</li>
                    <li>Page</li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default test
