"use client"

import {useState,useEffect, SetStateAction} from 'react'
import Coins from './components/Coins';
import SearchCoins from './components/SearchCoins';

interface Sparkline {
  // Define the properties of the Sparkline array
  // You might need to adjust the type depending on the actual data
  // For simplicity, assuming it's an array of strings or numbers
  [index: number]: string | number | null;
}

export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: Sparkline;
  lowVolume: boolean;
  coinrankingUrl: string;
  '24hVolume': string;
  btcPrice: string;
  // Add other properties as needed
}

export interface CoinsProps {
  coins: Coin[] | null
}

interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

interface ApiResponse {
  status: string;
  data: {
    stats: Stats;
    coins: Coin[];
  };
}



export default function Home({searchParams}:{searchParams : {search:string | undefined}}) {

  const [coins,setCoins] = useState<Coin[] | null>(null)


/*   useEffect(()=>{
    const fetchData = async () => {
      try {


        const response = await fetch('/api/coins'); // Replace with your actual API endpoint
        const coins: ApiResponse = await response.json() // Type assertion
        setCoins(coins.data.coins); // Set the fetched data to the 'coins' state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[])
 */

  return (
    <div className='text-center'>
        <h1 className='font-bold text-6xl mt-14'>Crypto Coins</h1>
         <SearchCoins getSearchResults={(result: SetStateAction<Coin[] | null>)=>setCoins(result)}
                      name={searchParams.search}  />
         <Coins coins={coins}/>
    </div>
  )
}
