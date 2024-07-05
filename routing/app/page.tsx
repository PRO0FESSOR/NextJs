import Link from "next/link"

const page = () => {
  return (
    <>    
    <h1 className="flex justify-center">Hello, Next.js!</h1>
    <Link className="border-red-600 hover:bg-red-500" href="/dashboard" >Dashboard</Link>
    </>  
  )
}

//use router - to change the routes from client components

// 'use client'
 
// import { useRouter } from 'next/navigation'
 
// export default function Page() {
//   const router = useRouter()
 
//   return (
//     <button type="button" onClick={() => router.push('/dashboard')}>
//       Dashboard
//     </button>
//   )
// }




export default page