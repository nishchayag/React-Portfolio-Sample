import React from "react";
const ContactForm = () => {
  return (
    <form
      className="w-full"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <div className="flex w-full justify-center mt-20 flex-col items-center">
        <div className="flex flex-col justify-center items-center w-full lg:w-1/3 mr-5">
          <h1 className="text-5xl text-center">Enter Details:</h1>
          <input
            type="hidden"
            name="access_key"
            value="f1bbca75-5399-4ffa-8895-8ce59e21d977"
          ></input>
          <div className="mt-10 flex justify-center items-center w-full">
            <div className="w-full mx-5 flex justify-center items-center">
              <input
                required
                type="text"
                className=" mx-2 w-full text-white bg-transparent  border-2 border-neutral-800 rounded-lg py-2 px-5 "
                placeholder="First Name *"
                name="firstName"
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <input
                required
                type="text"
                className="mx-2 w-full text-white bg-transparent  border-2 border-neutral-800 rounded-lg py-2 px-5"
                placeholder="Second Name *"
                name="secondName"
              />
            </div>
          </div>
          <div className="mt-5 w-full px-2 pr-6">
            <input
              required
              type="text"
              placeholder="Company Name *"
              name="companyName"
              className="mx-5 w-full text-white bg-transparent  border-2 border-neutral-800 rounded-lg py-2 px-5 "
            />
          </div>
          <div className="mt-5 flex justify-center items-center w-full">
            <div className="w-full mx-5 flex justify-center items-center">
              <input
                required
                name="email"
                type="email"
                className=" mx-2 w-full text-white bg-transparent  border-2 border-neutral-800 rounded-lg py-2 px-5 "
                placeholder="Email *"
              />
            </div>
            <div className="w-full flex justify-center flex-col items-center">
              <input
                required
                name="number"
                type="tel"
                className="mx-2 w-full text-white bg-transparent  border-2 border-neutral-800 rounded-lg py-2 px-5"
                placeholder="Phone No. *"
              />
            </div>
          </div>
          <div className="mt-5 w-full h-fit px-2 pr-6">
            <textarea
              required
              name="message"
              type="text"
              placeholder="Message *"
              className="mx-5 w-full h-[200px] text-white bg-transparent  border-2 border-neutral-800 rounded-lg py-2 px-5 "
            />
          </div>
        </div>
        <div className="mt-5 box-border ">
          <button className="bg-slate-200 hover:bg-slate-400 text-black font-bold px-5 py-2 rounded-xl">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
