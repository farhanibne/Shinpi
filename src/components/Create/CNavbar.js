import Link from 'next/link'
import React from 'react'


function Cnavbar() {
  return (
    <>
   <div>
    <Link href='/Dashboard'>
    <h1 style={{margin:'5px',fontSize:'45px'}}>←</h1>
    </Link>

   </div> <hr/>
   </>
  )
}

export default Cnavbar