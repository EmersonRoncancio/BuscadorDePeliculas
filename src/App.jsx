import { useState} from 'react'
import { Card } from './componets/Card'
import { useCardsFetch } from './componets/hooks/useCardsFetch'

console.log()

export const App = () => {
    
    const [checkbox, setCheckbox] = useState(false)
    const [finish, setFinish] = useState('')
    const {catalogo} = useCardsFetch({finish,checkbox})
    const data = catalogo?.length==0?false:true
    // const test = useRef()

    // const onSubmit = (e)=>{
    //     e.preventDefault()
    //     // const data = new window.FormData(e.target)
    //     // const info = data.get('pelis')
    //     const info = Object.fromEntries(
    //         new window.FormData(e.target)
    //     )
    //     // console.log(info)
    //     setFinish(info.pelis)
    // }

    const handleChange = (e)=>{
        setFinish(e.target.value)   
    }

    const handleCheckBox = ()=>{
        setCheckbox(!checkbox)
    }

  return (
    <>
    <header className='w-full h-[20%] flex justify-center items-center'>
        <form onSubmit={(e)=>onSubmit(e)} className='w-full h-full flex flex-col justify-center items-center gap-2'>
            <input className='outline-2 outline-gray-600 rounded-md w-[250px] p-2'
                name='pelis'
                placeholder='Buscar'
                type="text"
                onChange={handleChange}
                />
                <input type="checkbox" onChange={handleCheckBox} checked={checkbox}/>
            <button type='submid'
                className='bg-slate-600 px-5 py-2 rounded-lg'>
                <strong className='text-white'>Buscar</strong>
            </button>
        </form>
    </header>
    <main className='w-full h-screen bg-black'>
        <article className='w-full grid responsive justify-center items-center gap-3 justify-items-center'>
            {
                catalogo&&data?
                    <Card catalogo={catalogo} finish={finish}/>:
                    (<h1 className='text-white'>No ahi nada mani</h1>)
            }
        </article>
    </main>
    </>
  )
}
