interface ButtonProps {
  title: string;
  bgColor: string;
  textColor: string;
}

function Button({ title, bgColor, textColor }: ButtonProps) {
  return (
    <div>
      <button className={`${bgColor} px-6 py-3 rounded-4xl ${textColor} font-poppins shadow-md`}>{title}</button>
    </div>
  )
}

export default Button