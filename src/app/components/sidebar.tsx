import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5 fixed z-50">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="py-2 hover:bg-gray-700 px-2 rounded">
          <Link href="/">Home</Link>
        </li>
        <li className="py-2 hover:bg-gray-700 px-2 rounded">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="py-2 hover:bg-gray-700 px-2 rounded">
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
