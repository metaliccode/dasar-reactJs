import React from "react";
import PropsComponent from "./PropsComponent";

export default function User() {
  const data = [
    {
      id: "1",
      name: "ihsan",
      divisi: "Education",
    },
    {
      id: "2",
      name: "Miftahul",
      divisi: "Sales",
    },
    {
      id: "3",
      name: "Rine",
      divisi: "Sales",
    },
  ];

  return (
    <div>
      {/* menggunakan props.data.name */}
      {data.map((data) => (
        <PropsComponent key={data.id} name={data.name}></PropsComponent>
      ))}

      {/* menggunakan props.children */}
      {data.map((data) => (
        <PropsComponent key={data.id}>
          <ul>
            <li>
              {data.name} - {data.divisi}
            </li>
          </ul>
        </PropsComponent>
      ))}
    </div>
  );
}
