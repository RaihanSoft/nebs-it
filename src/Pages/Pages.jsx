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

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h2 className="text-lg font-semibold text-center mb-6">
        Complete the steps to unlock your solar potential
      </h2>

      {/* Progress Steps */}
      <div className="flex items-center space-x-4 mb-8">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div key={index} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-medium border-2 transition-all
          ${step === index + 1 ? "border-blue-600 text-blue-600" : "border-gray-300 text-gray-500"}`}
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
          ${step === index + 1 ? "w-16 border-t-4 -mt-3 border-blue-600" :
                    step > index + 1 ? "w-0 border-none px-3 " : "w-6 border-t-2 ml-5 -mt-3 border-gray-300"}`}
              />
            )}
          </div>
        ))}
      </div>



      {/* Question Section (Dynamic for Each Step) */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-[400px] md:w-[500px]">
        <p className="font-medium text-gray-700 mb-4">
          {step === 1
            ? "Are you a home owner? *"
            : step === 2
              ? "Do you have an existing solar system? *"
              : "More questions here..."}
        </p>

        <div className="flex flex-col">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={`step${step}`}
              value="yes"
              checked={isHomeOwner === "yes"}
              onChange={() => setIsHomeOwner("yes")}
              className="hidden"
            />
            <div
              className={`w-5 h-5 rounded-full border-2 ${isHomeOwner === "yes"
                  ? "border-blue-600 bg-blue-600"
                  : "border-gray-400"
                }`}
            />
            <span className="text-gray-700">Yes</span>
          </label>

          <label className="flex items-center space-x-2 mt-2 cursor-pointer">
            <input
              type="radio"
              name={`step${step}`}
              value="no"
              checked={isHomeOwner === "no"}
              onChange={() => setIsHomeOwner("no")}
              className="hidden"
            />
            <div
              className={`w-5 h-5 rounded-full border-2 ${isHomeOwner === "no"
                  ? "border-blue-600 bg-blue-600"
                  : "border-gray-400"
                }`}
            />
            <span className="text-gray-700">No</span>
          </label>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="w-1/3 bg-gray-300 text-gray-800 text-lg font-medium py-2 rounded-lg transition hover:bg-gray-400"
            >
              Back
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={!isHomeOwner}
            className={`w-${step > 1 ? "2/3" : "full"} bg-blue-600 text-white text-lg font-medium py-2 rounded-lg transition ${isHomeOwner ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
