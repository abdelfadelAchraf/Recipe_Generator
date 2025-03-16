import Button from "../components/common/button"
import Carousel from "../components/common/Carousel "
import Title from "../components/common/Title"

const Home = () => {
  return (
    <div className="flex items-center justify-center text-center flex-col w-full pt-10">
        <h1 className="text-8xl my-4">Superfast Recipe Creation<br /> <span className="text-red-400 text-6xl"> Powered by AI</span></h1>
        <p className="text-2xl text-gray-700 mb-6">Create delicious recipes in seconds—no more guessing ingredients!</p>
        <Button text="start for free" className="py-4 px-16 text-2xl transition-all duration-75"/>
        <Carousel/>
        <Title text1={"Create any recipe faster and better"} text2={"integrate AI in your daily recipes"}/>
    </div>
  )
}

export default Home