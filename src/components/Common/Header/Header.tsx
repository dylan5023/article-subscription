function Header() {
  return (
    <div className="fixed h-[60px] z-10 bg-black text-white w-[420px] flex items-center justify-between px-4">
      <div className="text-xl font-semibold">My article</div>
      <button className="text-xl">Register</button>
    </div>
  );
}

export default Header;
