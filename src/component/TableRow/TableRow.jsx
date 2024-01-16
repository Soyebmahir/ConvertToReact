/* eslint-disable react/prop-types */

const TableRow = ({ students }) => {
  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{students.id}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={students.image}
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{students.name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{students.scores}</td>
      <td className="p-5 text-sm md:text-xl text-center">
        {students.percentage}
      </td>
    </tr>
  );
};

export default TableRow;
