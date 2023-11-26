import React from 'react'
import { CoinsProps } from '../page'
import Image from 'next/image'

function Coins({coins}:CoinsProps) {

  return (
    <>
    <ul className='grid grid-cols-4 mx-auto max-w[1260px] gap-10'>
        {coins?.map(coin=>(
            <li key={coin.uuid} className='flex flex-col'> 
   {/*      {coin.iconUrl &&      <Image src={coin.iconUrl} 
                   alt={coin.name} 
                   width={70} 
                   height={70}
                   priority
                   /> } */}
       
                <h3>{coin.name}</h3>
                <h3>{coin.symbol}</h3>
                <h3>{coin.price}</h3>
            </li>
        ))}
    </ul>
    
    </>
  )
}

export default Coins