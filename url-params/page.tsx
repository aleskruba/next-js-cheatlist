import Image from 'next/image'
import ReadParams from './components/readParams'
import DataDisplay from './components/DataDisplay'
import { Suspense } from 'react'

export default function Home({searchParams}:{searchParams : {id:string | undefined, name:string | undefined, age:string | undefined}}) {

  return (
    <main className="mt-10 max-w-7xl px-6 mx-auto">
      <ReadParams/>
      <Suspense key={searchParams.id} fallback={<div>Loading....</div>}>
      <DataDisplay id={searchParams.id} name={searchParams.name} age={searchParams.age}/>
    </Suspense>
    </main>
  )
}
