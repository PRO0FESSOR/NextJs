import Link from "next/link"

const page = () => {
  return (
    <>    
    <h1 className="flex justify-center">Hello, Next.js!</h1>
    <Link className="border-red-600 hover:bg-red-500" href="/dashboard">Dashboard</Link>
    </>
    

  )
}

export default page