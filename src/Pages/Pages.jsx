import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isHomeOwner, setIsHomeOwner] = useState(null);
  const [creditScore, setCreditScore] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    street: "",
    city: "",
    zip: "",
    state: "",
  });

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };


  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex  flex-col min-h-[441.93px] lg:w-[512px] w-full items-center rounded-3xl p-[30px] bg-[#FFFFFF]">


      {step !== 6 && (
        <div>
          <h2 className="text-lg font-semibold text-center mb-6">
            Complete the steps to unlock your solar potential
          </h2>
          <div className="flex items-center space-x-4 ">

            {Array.from({ length: totalSteps }, (_, index) => (
              <div key={index} className="flex items-center">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-medium border-2 transition-all
              ${step === index + 1 ? "border-blue-200 text-blue-500" : "border-blue-600 text-blue-600"}`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-xs text-gray-500">
                    {index + 1 === totalSteps ? "Last Page" : "Next"}
                  </span>
                </div>

                {/* Right-side Border Logic */}
                {index < totalSteps - 1 && (
                  <div
                    className={`h-0.5 transition-all 
              ${step === index + 1 ? "lg:w-16 w-full border-t-2 -mt-3 border-gray-600" :
                        step > index + 1 ? "w-0 border-none px-3 " : "w-6 border-t-2 ml-5 -mt-3 border-gray-300"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Question Section */}
      <div className="p-6 md:p-8 w-[300px] md:w-[500px]">
        {step === 1 && (
          <>
            <p className="text-xl mb-4 font-bold">Are you a home owner? *</p>
            <div className="flex flex-col">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="homeOwner"
                  value="yes"
                  checked={isHomeOwner === "yes"}
                  onChange={() => setIsHomeOwner("yes")}
                  className="hidden"
                />
                <div className={`w-5 h-5 rounded-full border-2 ${isHomeOwner === "yes" ? "border-blue-600 bg-blue-600" : "border-gray-400"}`} />
                <span className="text-gray-700">Yes</span>
              </label>

              <label className="flex items-center space-x-2 mt-2 cursor-pointer">
                <input
                  type="radio"
                  name="homeOwner"
                  value="no"
                  checked={isHomeOwner === "no"}
                  onChange={() => setIsHomeOwner("no")}
                  className="hidden"
                />
                <div className={`w-5 h-5 rounded-full border-2 ${isHomeOwner === "no" ? "border-blue-600 bg-blue-600" : "border-gray-400"}`} />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </>
        )}

        {step === 2 && (
          <div>    <p className="text-xl mb-4 font-bold">Is your monthly electricity bill over $99? *</p>
            <>
              <div className="flex flex-col">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="homeOwner"
                    value="yes"
                    checked={isHomeOwner === "yes"}
                    onChange={() => setIsHomeOwner("yes")}
                    className="hidden"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 ${isHomeOwner === "yes" ? "border-blue-600 bg-blue-600" : "border-gray-400"}`} />
                  <span className="text-gray-700">Yes</span>
                </label>

                <label className="flex items-center space-x-2 mt-2 cursor-pointer">
                  <input
                    type="radio"
                    name="homeOwner"
                    value="no"
                    checked={isHomeOwner === "no"}
                    onChange={() => setIsHomeOwner("no")}
                    className="hidden"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 ${isHomeOwner === "no" ? "border-blue-600 bg-blue-600" : "border-gray-400"}`} />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
            </>

          </div>

        )}

        {step === 3 && (
          <>
            <p className="text-xl mb-4 font-bold">Your estimated credit score? *</p>
            <div className="flex flex-col space-y-2">
              {["More Than 740 (Excellent)", "680 - 739 (Good)", "Less than 569 (Poor)", "I'm not sure"].map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="creditScore"
                    value={option}
                    checked={creditScore === option}
                    onChange={() => setCreditScore(option)}
                    className="hidden"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 ${creditScore === option ? "border-blue-600 bg-blue-600" : "border-gray-400"}`} />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </>
        )}


        {step === 4 && (
          <>
            <p className="text-xl mb-4 font-bold">Your Name *</p>
            <input
              type="text"
              placeholder="Type Your Name"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              className="border rounded-md w-full p-2 mb-2"
            />
            <p className="text-xl mb-4 font-bold">Address *</p>
            <input
              type="text"
              placeholder="Street Address"
              value={userInfo.street}
              onChange={(e) => setUserInfo({ ...userInfo, street: e.target.value })}
              className="border rounded-md w-full p-2 mb-2"
            />
            <input
              type="text"
              placeholder="City"
              value={userInfo.city}
              onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
              className="border rounded-md w-full p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Zip"
              value={userInfo.zip}
              onChange={(e) => setUserInfo({ ...userInfo, zip: e.target.value })}
              className="border rounded-md w-full p-2 mb-2"
            />
            <input
              type="text"
              placeholder="State"
              value={userInfo.state}
              onChange={(e) => setUserInfo({ ...userInfo, state: e.target.value })}
              className="border rounded-md w-full p-2"
            />
          </>
        )}

        {step === 5 && (
          <>
            <p className="text-xl mb-4 font-bold">One last thing...</p>
            <p className="text-lg font-medium">Contact *</p>
            <input
              type="text"
              required
              placeholder="Phone number"
              value={userInfo.contact}
              onChange={(e) => setUserInfo({ ...userInfo, contact: e.target.value })}
              className="border rounded-md w-full p-2 mb-4"
            />
            <p className="text-lg font-medium">Preferred time of calling? *</p>
            <div className="flex flex-col space-y-2">
              {["9 AM - 11 AM", "6 PM - 8 PM", "I'm available to pick anytime"].map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredTime"
                    value={option}
                    checked={userInfo.preferredTime === option}
                    onChange={() => setUserInfo({ ...userInfo, preferredTime: option })}
                    className="hidden"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 ${userInfo.preferredTime === option ? "border-blue-600 bg-blue-600" : "border-gray-400"}`} />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </>
        )}


        {step === 6 && (
          <div className="flex items-center justify-center">
            <div className=" text-center">
              <p className="text-4xl font-medium text-gray-700">Thank you for your <br /> response</p>
              <hr className="my-8 border-gray-900" />
              <p className="text-lg font-semibold text-start text-gray-700">
                You're about to save an estimated <span className="font-bold "> <br /> 18,000 USD.</span>
              </p>
              <p className="text-gray-500 mt-2 text-start">We’ll contact you soon with <br /> proper credentials.</p>
              <button
                onClick={() => setStep(1)}
                className="mt-6 px-6 py-2 bg-[#033E8A] text-white font-bold rounded-full hover:bg-white hover:text-[#033E8A] border-1 border-[#033E8A] transition-all">
                Back To Home
              </button>
              <p className="text-green-800 text-start mt-6">Form successfully submitted.</p>
            </div>
          </div>
        )}




        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6">
          {step < 5 && (
            <>
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="w-1/3 border-[#033E8A] border-1 rounded-[50px] md:px-[30px] py-2.5 text-lg font-medium text-[#033E8A] transition hover:bg-[#033E8A] hover:text-[#EEEEEE]"
                >
                  Back
                </button>
              )}

              <button
                onClick={handleNext}
                disabled={step === 3 ? !creditScore : step === 4 ? !userInfo.name || !userInfo.street || !userInfo.city || !userInfo.zip || !userInfo.state : !isHomeOwner}
                className="w-2/3 bg-[#033E8A] ml-5 rounded-[50px] text-[#FFFFFF] text-[16px] font-bold py-2.5 md:px-[133px] transition"
              >
                Next
              </button>
            </>
          )}


          {step === 5 && (
            <button
              onClick={() => setStep(6)}
              className="w-full bg-[#033E8A] hover:bg-white hover:text-[#033E8A] border-1 border-[#033E8A] rounded-[50px] text-[#FFFFFF] text-[16px] font-bold py-2.5 px-[133px] transition"
            >
              Submit
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default MultiStepForm;
