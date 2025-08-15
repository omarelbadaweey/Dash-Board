
function Header() {

  return (
     <header className="h-[80px] mx-auto bg-black sticky top-0 left-0 overflow-hidden z-[1000]">
    <div className=" mx-auto capitalize text-white flex items-center justify-between w-[90%] h-[100%]">
        <h2 className="text-xl font-bold text-blue-300">Dash Board</h2>
        <h2 className="text-xl font-bold text-blue-300">بيانات العملاء</h2>
    </div>
  </header>
  );
}

export default Header;