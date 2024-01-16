/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import TableRow from "../TableRow/TableRow";

const StudentTable = ({ studentInfo }) => {
  console.log(studentInfo);
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#FFFFFF0D]">
          <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
            ID
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold text-left">
            Name
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
          <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
        </tr>
      </thead>
      {studentInfo.map((data) => (
        <tbody key={data.class}>
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              {data.class}
            </td>
          </tr>
          {data.students.map((students) => (
            <TableRow key={students.id} students={students}></TableRow>
          ))}
        </tbody>
      ))}
    </table>
  );
};

export default StudentTable;
