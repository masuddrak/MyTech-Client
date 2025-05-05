import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="text-center">
      <h3 className="base-title">{ title}</h3>
      <p className="mb-[30px]">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
