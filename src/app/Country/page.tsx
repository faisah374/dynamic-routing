import Navbar from '@/componets/Navbar'
import React from 'react'

function Country () {
  return (
    <div className='m-4 text-center m-b2'>
      
<h1 className='text-white-2x1 border-2 p-2 bg-purple-400 m-4'>List of countries</h1>
<Navbar href="/Country/pakistan"name ='pakistan' />
<Navbar href='/Country/india'name='india'/>
<Navbar href='/Country/sudiarab'name='sudiarab'/>
<Navbar href='/Country/england' name='england '/>
<Navbar href='/Country/iran'name='iran'/>


    </div>
  )
}

export default Country
