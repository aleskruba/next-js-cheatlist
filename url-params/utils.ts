
export async function fetchData(id:string | undefined, name:string | undefined, age:string | undefined):Promise<any> {
    
    const data ={
        id:id || '',
        name: name || '',
        age: age || '',
    }


 return new Promise((resolve) => {
    setTimeout(()=> {
        resolve(data)
     },1000 )
    }
 )
}