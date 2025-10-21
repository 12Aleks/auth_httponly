import {IUser} from "@/app/utils/types";

const TableComponent = (user : IUser) => {
    return (
        <table className="table-auto min-w-full border-1 border-white rounded-lg overflow-hidden ">
            <thead >
            <tr  className="border border-white">
                <th className="border border-white px-4 py-2 text-left">Name</th>
                <th className="border border-white px-4 py-2 text-left">Surname</th>
                <th className="border border-white px-4 py-2 text-left">Role</th>
                <th className="border border-white px-4 py-2 text-left">Email</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border border-white">
                <td className="border border-white px-4 py-2">{user.name}</td>
                <td className="border border-white px-4 py-2">{user.surname}</td>
                <td className="border border-white px-4 py-2">{user.role}</td>
                <td className="border border-white px-4 py-2">{user.email}</td>
            </tr>
            </tbody>

            
        </table>
    );
};

export default TableComponent;