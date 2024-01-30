import Image from "next/image"

export const metadata = {
  title: 'SiSGeA - El software scout'
}

function Page() {
  return (
    <div className={`flex flex-col items-center justify-center h-screen`}>
      <div className="mb-6 aspect-video w-unit-5xl relative">
        <Image src="/sisgea_logo.png" fill alt="Logo" className="mb-4" />
      </div>
      <h1 className="text-3xl font-bold mb-6">SiSGeA <span className={`text-3xl font-bold mb-6 text-blue-700`}>El software scout</span></h1>
    </div>
  )
}

export default Page