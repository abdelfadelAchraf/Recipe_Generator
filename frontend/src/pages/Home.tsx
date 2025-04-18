import Button from "../components/common/button"
import Carousel from "../components/common/Carousel "
import Title from "../components/common/Title"
import Scrolling from "../components/Scrolling"

const Home = () => {
  return (
    <div className="flex items-center justify-center text-center flex-col w-full pt-10 px-2">
        <h1 className="text-6xl w-full lg:text-8xl my-4 text-white">Superfast Recipe Creation<br /> <span className="text-red-400 text-4xl lg:text-6xl"> Powered by AI</span></h1>
        <p className="text-lg  px-3 lg:text-2xl text-white/60 mb-6">Create delicious recipes in seconds—no more guessing ingredients!</p>
        <Button text="Generate your recipe" className="py-4 px-16 text-2xl transition-all duration-75"/>
        <Carousel/>
        <Title text1={"Create any recipe faster and better"} text2={"integrate AI in your daily recipes"}/>
      <Scrolling/>
    </div>
  )
}

export default Home