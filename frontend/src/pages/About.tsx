import { assets } from "../assets/assets";
import Button from "../components/common/button";
import Title from "../components/common/Title";

const About: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12 h-screen">
      {/* Title */}
      <Title text1="About" text2="Us" className="text-6xl text-red-400" />

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
        {/* Left Side - Text Content */}
        <div className="space-y-4 bg-red-100 py-3 px-3 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800">
            Discover Our Journey
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Button text="Contact Us" className="w-full py-4 rounded-lg text-2xl"/>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={assets.photo1}
            alt="Our Team"
            className="w-full max-w-md rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
