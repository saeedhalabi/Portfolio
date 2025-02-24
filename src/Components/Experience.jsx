import React from "react";
import { RoughNotation } from "react-rough-notation";

const Experience = () => {
  return (
    <div className="flex gap-10 p-10 mt-55">
      {/* Vertical text */}
      <div className="relative">
        <p className="absolute left-0 top-40 transform -rotate-90 origin-top-left text-xl font-bold">
          Experience
        </p>
      </div>

      {/* Timeline */}
      <div className="border-l-4 border-black pl-6 space-y-10">
        {/* Experience Block */}
        <div className="relative">
          <h3 className="text-lg font-semibold">
            <RoughNotation
              type="highlight"
              color="#ffcc00"
              animationDuration={1000}
              iterations={Infinity}
              show={true}
            >
              Frontend Development - Full-Time
            </RoughNotation>
          </h3>
          <p className="text-gray-500">
            Bearsight Inc. 06/2024 - Present | Canada - Remotely
          </p>
          <p className="mt-2 text-gray-700">
            Bearsight builds tools that provide valuable insights, helping
            businesses stay informed and in control.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>
              Developed dynamic user interfaces using React.js for{" "}
              <RoughNotation
                type="highlight"
                color="pink"
                animationDuration={1000}
                iterations={Infinity}
                show={true}
              >
                seamless
              </RoughNotation>{" "}
              UX.
            </li>
            <li>Implemented efficient state management with React hooks.</li>
            <li>
              Utilized Axios for{" "}
              <RoughNotation
                type="highlight"
                color="orange"
                animationDuration={1000}
                iterations={Infinity}
                show={true}
              >
                API
              </RoughNotation>{" "}
              requests, ensuring smooth data fetching.
            </li>
            <li>Resolved critical bugs to enhance application stability.</li>
            <li>
              Designed interactive, responsive components for better engagement.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
