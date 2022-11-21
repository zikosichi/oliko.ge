export function H1({children, className}){
  return (
    <h1 className={`${className} font-display text-4xl text-slate-900 leading-[1.4] font-semibold`}>{children}</h1>
  )
}

export function H2({children, className}){
  return (
    <h2 className={`${className} font-display text-4xl text-slate-900 font-semibold`}>{children}</h2>
  )
}