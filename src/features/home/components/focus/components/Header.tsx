interface HeaderProps {
  title: string;
  bgColor?:string;

}
function Header({ title ,bgColor}: HeaderProps) {
  return (
    <div className={`flex flex-row items-center pt-5  gap-4 ${bgColor} w-full px-10`}>
      <div className="border-b border-gray flex-1 "></div>
      <h1 className="text-gray-400 text-2xl">Our <span className="text-orange-400 font-poppins font-bold text-2xl">{title}</span></h1>
      <div className="border-b border-gray flex-1"></div>
    </div>
  )
}

export default Header

