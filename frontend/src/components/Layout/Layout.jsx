import React from 'react';
import Sidebar from '../Sidebar/Sidebar';


const Layout = ({children}) => {
  return (
    <div className="flex gap-2" >
        <Sidebar />
        <div className="w-3/4 absolute right-0 top-0 -z-10 border border-s-white">
      {children}
      </div>
    </div>
  )
}

export default Layout
