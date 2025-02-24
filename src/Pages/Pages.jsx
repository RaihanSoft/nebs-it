import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isHomeOwner, setIsHomeOwner] = useState(null);

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-[400px] md:w-[500px]">
        <h2 className="text-lg font-semibold text-center mb-4">
          Complete the steps to unlock your solar potential
        </h2>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-6 space-x-2">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium border-2
                ${step === index + 1 ? "border-blue-600 text-blue-600" : "border-gray-300 text-gray-500"}`}
              >
                {index + 1}
              </div>
              <span className="text-xs text-gray-500">{index + 1 === totalSteps ? "Last Page" : "Next"}</span>
            </div>
          ))}
        </div>

        {/* Question Section */}
        {step === 1 && (
          <div className="mb-6">
            <p className="font-medium text-gray-700">Are you a home owner? *</p>
            <div className="flex flex-col mt-2">
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
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-full bg-blue-600 text-white text-lg font-medium py-2 rounded-lg transition hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
