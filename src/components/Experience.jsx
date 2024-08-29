import React from "react";

function Experience({ title, company, startDate, endDate, description }) {
  return (
    <div className="flex flex-col border-white mb-16">
      <h2 className="text-3xl font-semibold ">
        {title} • {company}
      </h2>
      <h4 className="text-2xl mt-2">
        {startDate} - {endDate}
      </h4>
      <p className="text-xl mt-4">{description}</p>
    </div>
  );
}

export default Experience;
