// WorkExpCard.tsx
import React from "react";

type WorkExperience = {
  id: number;
  role: string;
  company: string;
  description: string;
  period: string;
};

type WorkExpCardProps = {
  workExperience: WorkExperience;
};

const WorkExpCard: React.FC<WorkExpCardProps> = ({ workExperience }) => {
  return (
    <div className="relative bg-gray-950 bg-opacity-30 backdrop-blur-3xl shadow-md rounded-lg p-6 mb-4  ">
      <h3 className="text-xl font-semibold text-gray-100 mb-2">
        {workExperience.role}
      </h3>
      <h4 className="text-lg font-medium text-gray-200 mb-2">
        {workExperience.company}
      </h4>
      <p className="text-gray-700 mb-4">{workExperience.description}</p>
      <p className="text-gray-500 text-sm">{workExperience.period}</p>
    </div>
  );
};

export default WorkExpCard;
