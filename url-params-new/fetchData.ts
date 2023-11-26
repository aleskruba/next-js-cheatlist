
export async function fetchDataClient(name:string | undefined, symbol:string | undefined,):Promise<any> {
    
    const data ={
        name: name || '',
        symbol: symbol || '',
    }


 return new Promise((resolve) => {
    setTimeout(()=> {
        resolve(data)
     },1000 )
    }
 )
}