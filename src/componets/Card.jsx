import { useState } from "react"

export const Card = ({catalogo,finish}) => {

  const [test, setTest] = useState('')

  const handleclick =()=>{
    setTest(finish)
  }

  return (
    <>
      <h1>{test}</h1>
      <button className="px-3 py-1 bg-slate-100 text-black" onClick={handleclick}>
          Clikeame pa
      </button>
      {
        catalogo && catalogo?.map((i)=>{
          return(
              <div
                className='w-[250px] h-[450px] flex flex-col items-center content-center border-2 border-white gap-3 rounded-md overflow-hidden'
                key={i.imdbID}>
                    <div className='w-full h-[70%]'>
                        <img 
                        className='w-full h-full object-cover'
                        src={i.Poster} alt={i.Title} />
                    </div>
                    
                    <h1 className='text-white font-mono text-center text-wrap'>{i.Title}</h1>
                    <h3 className='text-white font-mono text-center text-wrap'>{i.Year}</h3>
                </div>
          )
      })
      }
    </>
  )
}
