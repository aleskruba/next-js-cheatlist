"use client"

import { useRouter, useSearchParams,usePathname } from 'next/navigation'
import React, { useCallback,useState,ChangeEvent  } from 'react'

interface Person {
    name:string,
    age:string
}

const  ReadParams: React.FC = () => {

    const [person,setPerson] = useState<Person>({
        name:'',
        age:''
    })
    
    const router = useRouter()
    const pathname = usePathname();
    const searchParams = useSearchParams()

    const id = searchParams.get("id")

 
    const createQueryString = useCallback(
        (name: string,value:string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name,value)
            return params.toString()
        }

        ,[searchParams])



        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       
            setPerson(prevPerson => ({...prevPerson,[e.target.name]:e.target.value}) )
  

          };


        const handleSubmit = (e:any) => {
            e.preventDefault()

            const currentSearchParams = new URLSearchParams(location.search);
        
            currentSearchParams.set('name', person.name);
            currentSearchParams.set('age', person.age);
        
            router.push(`${pathname}?id=${id}&name=${person.name}&age=${person.age}`);
        }



    return (
    <div>
        <button 
        onClick={()=>{
            let  nextID = parseInt(id ?? "0")+1
            router.push(`/?${createQueryString("id",nextID.toString())}`)
        }}
        
        className='bg-gray-200 px-3 border-gray-200'>Next ID</button>


        <form onSubmit={handleSubmit}>
            <input value={person.name} 
                    name='name'
                   placeholder='name'
                   onChange={handleChange}/>
            <input value={person.age} 
                    name='age'
                   placeholder='age'
                   onChange={handleChange}/>
            <input type='submit' value='submit' />
        </form>
    </div>
  )
}

export default ReadParams