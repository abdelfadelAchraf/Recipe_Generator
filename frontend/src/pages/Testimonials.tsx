import { assets } from "../assets/assets";
import Button from "../components/common/button";
import Title from "../components/common/Title";

type Props = {};

function Testimonials({}: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-10 space-y-10">
      <Title
        text1="Our Users Love Us"
        text2="Hear what our community is saying"
        className="text-5xl md:text-6xl text-center hover:text-red-400 transition-all duration-300"
      />

      {/* Users Count Section */}
      <div className="flex flex-col items-center w-full bg-white/10 p-6 rounded-lg shadow-lg">
        <div className="flex -space-x-3 overflow-hidden">
          {[assets.photo1, assets.photo2, assets.photo1, assets.photo2, assets.photo1].map((photo, index) => (
            <img key={index} className="w-12 h-12 bg-gray-200 rounded-full border-2 border-white hover:border hover:border-red-400 transition-all duration-300" src={photo} alt="User" />
          ))}
        </div>
        <h1 className="text-4xl text-red-400 italic mt-4">50,000+</h1>
        <p className="text-white font-semibold text-center mt-2">
          We are creating a UX Pilot Community, be part of it
        </p>
        <Button text="Start for Free" className="mt-4" />
      </div>

      {/* Testimonials Section */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="flex flex-col bg-white/10 p-6 rounded-lg shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <img src={assets.photo1} alt="" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="text-2xl text-white font-bold">John Doe</h1>
              <p className="text-white text-opacity-80">Content Creator</p>
            </div>
          </div>
          <p className="text-white text-opacity-90 text-left">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, minima! Eum maiores, ea dolorum veritatis non aliquam doloremque."
          </p>
           <video className="rounded-lg shadow-md w-full h-64 bg-black" controls>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

        <div className="flex flex-col bg-white/10 p-6 rounded-lg shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <img src={assets.photo1} alt="" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="text-2xl text-white font-bold">John Doe</h1>
              <p className="text-white text-opacity-80">Content Creator</p>
            </div>
          </div>
          <p className="text-white text-opacity-90 text-left">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, minima! Eum maiores, ea dolorum veritatis non aliquam doloremque."
          </p>
           <video className="rounded-lg shadow-md w-full h-64 bg-black" controls>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

       
      </div>
    </div>
  );
}

export default Testimonials;
