import { useForm } from "react-hook-form";
import { RiSendPlaneLine } from "react-icons/ri";

const getInTouch = "Get in touch if you need help with a project !";
const send = "Send";
const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  function onSubmit(data) {
    console.log(data.fullName);
  }
  return (
    <div className="sm:bg-white xl:items-center xl:justify-center xl:bg-gray-300 flex min-h-screen">
      <div className="h-80h bg-yellow w-90v rounded-br-7xl">
        <div className="font-display mx-8 mt-8 text-4xl text-white">
          {getInTouch}
        </div>
        <div className="mx-8 mt-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="bg-yellow focus:outline-none focus:border-dark focus:placeholder-dark h-12 my-2 font-serif text-lg text-white placeholder-white border-b-2 border-white"
                type="text"
                placeholder="Full Name"
                name="fullName"
                ref={register({ required: true, min: 3 })}
              />
              <div className="text-dark">
                {errors.fullName && "your name is required"}
              </div>

              <input
                className="bg-yellow focus:outline-none focus:border-dark focus:placeholder-dark h-12 my-2 font-serif text-lg text-white placeholder-white border-b-2 border-white"
                type="email"
                placeholder="Email"
                name="email"
                ref={register({
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              <div className="text-dark">
                {errors.email && "your Email is required"}
              </div>
              <input
                className="bg-yellow focus:outline-none focus:border-dark focus:placeholder-dark h-12 my-2 font-serif text-lg text-white placeholder-white border-b-2 border-white"
                name="message"
                placeholder="Message"
                ref={register({
                  required: true,
                  min: 3,
                })}
              />
              <div className="text-dark">
                {errors.message && "message input is required"}
              </div>
            </div>
            <div>
              <button
                className="bg-blue rounded-xl focus:outline-none flex px-4 py-2 mt-4 font-serif text-lg text-white"
                type="submit"
              >
                {send}
                <RiSendPlaneLine className="mt-1 ml-2 text-2xl" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
