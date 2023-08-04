import React, { useState, useEffect } from "react";

const DepartmentsList = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Fetch the data from an API endpoint
  // }, []);

  return (
    <div>
      <h2>Список відділень</h2>
      <ul>
        {data.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentsList;
