
type Props = {
  text1?:string ,
  text2?:string ,
  className?:string 
}

function Title({text1 , text2 , className}: Props) {
  return (
    <div className="py-3  ">
      <div className={`mt-9 flex flex-col items-center justify-center `}>
        {/* <h1>Create any recipe faster and better</h1> */}
        {/* <p>integrate AI in your daily recipes</p> */}
        <h1 className={`text-4xl text-balance text-white uppercase  ${className}`}>{text1}</h1>
        <p className="text-2xl mt-3 text-white/60">{text2} </p>
    </div>
    </div>
  )
}

export default Title