import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="w-40 h-screen bg-gray-800 text-white p-5 fixed z-50">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="py-2 hover:bg-gray-700 px-2 rounded">
          <Link href="/pos">pos</Link>
        </li>
        <li className="py-2 hover:bg-gray-700 px-2 rounded">
          <Link href="/inventory">inventory</Link>
        </li>
        <li className="py-2 hover:bg-gray-700 px-2 rounded">
          <Link href="/users">Users</Link>
        </li>
        <li className="py-2 hover:bg-gray-700 px-2 rounded">
          <Link href="/settings">Settings</Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
