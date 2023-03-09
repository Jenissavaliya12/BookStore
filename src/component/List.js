import React from "react";
import Title from "./Title";
function List() {
  const fields = [
    {
      id: 1,
      title: "Jenis",
      description: "This is description1",
    },
    {
      id: 2,
      title: "Jenis2",
      description: "This is description2",
    },
  ];

  const fieldList = fields.map((field) => <Title key={field.id}field={field} />);

  return <div>{fieldList}</div>;
}

export default List;
