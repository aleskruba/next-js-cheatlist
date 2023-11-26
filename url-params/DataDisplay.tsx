import React, { Suspense } from 'react'
import { fetchData } from '../lib/utils'

async function DataDisplay({id,name,age}:{id:string | undefined, name:string | undefined , age:string | undefined}) {

    const data = await fetchData(id,name,age)
  return (
  
              <h5 className='mt-5'>{JSON.stringify(data,undefined,2)}</h5>


  )
}

export default DataDisplay