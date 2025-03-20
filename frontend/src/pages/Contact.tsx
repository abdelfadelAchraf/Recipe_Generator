import Button from "../components/common/button";
import Title from "../components/common/Title";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 px-6">
      <Title
        text1="contact"
        text2="us"
        className="text-5xl md:text-6xl text-center hover:text-red-400 transition-all duration-300"
      />
      <p className="text-lg text-white/20 mb-4 text-center max-w-md">
        Have any questions or feedback? Reach out to us and we'll get back to you as soon as possible!
      </p>
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-left">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 "
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 "
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 "
            placeholder="Type your message"
            rows={4}
          ></textarea>
        </div>
      <Button text="send message" className="w-full py-2  rounded-lg hover:bg-red-500 transition"/>
      </form>
    </div>
  );
};

export default Contact;
