function Sidebar() {
  return (
    <div className="flex items-center justify-between mt-6 ml-6">
      <img
        className="h-14 w-14 rounded-full object-cover"
        src="/ava.jpg"
        alt=""
      />
      <div className="flex-1 ml-4 mr-24">
        <h2 className="font-semibold text-sm">fahrifz</h2>
        <p className="text-sm text-gray-400">Fahri Fauzi</p>
      </div>
      <button className="text-blue-400 text-xs font-semibold">Sign Out</button>
    </div>
  );
}

export default Sidebar;
