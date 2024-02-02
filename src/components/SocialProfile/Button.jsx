const Button = ({title}) => {
  return (
    <>
        <button className="bg-grey text-white h-12  rounded-md cursor-pointer font-semibold text-sm transition ease-in-out delay-100 hover:bg-primary hover:text-dark-grey duration-150 ">{title}</button>
    </>
  )
}

export default Button