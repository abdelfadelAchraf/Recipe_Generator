import Button from "../components/common/button"

const Home = () => {
  return (
    <div className="flex items-center justify-center text-center flex-col h-screen w-full">
        <h1 className="text-8xl my-4">Superfast UX Design <br /> <span className="text-red-400 text-6xl"> Powered by AI</span></h1>
        <p className="text-2xl text-gray-700 mb-6">Design in seconds what used to take weeks.</p>
        <Button text="start for free" className="py-4 px-16 text-2xl transition-all duration-75"/>
    </div>
  )
}

export default Home