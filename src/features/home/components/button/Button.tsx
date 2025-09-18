interface ButtonProps {
  title: string;
  bgColor: string;
  textColor: string;
  hoverColor:string;
}

function Button({ title, bgColor, textColor,hoverColor }: ButtonProps) {
  return (
    <div>
      <button className={`${bgColor} px-3 py-1 text-[10px] md:text-base md:px-6 md:py-3 rounded-4xl ${textColor} font-poppins shadow-md ${hoverColor}`}>{title}</button>
    </div>
  )
}

export default Button