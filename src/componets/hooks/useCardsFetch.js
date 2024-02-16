import { useState,useEffect,useRef,useMemo } from 'react'

export const useCardsFetch = ({finish,checkbox}) => {

    const [catalogo, setCatalogo] = useState([])
    const infoRender = useRef(true)
    const apikey = 'bcb3ef7a'
    // const referencia = useRef(finish)
    // const render = useRef(finish)

    useEffect(() => {
        // if(render===finish.current) return;
        // if(infoRender.current){
        //     infoRender.current= finish === ''
        //     return
        // }
        // console.log(infoRender)
        // referencia.current = finish
        // console.log(referencia)
        console.log("se esta renderizando")
        fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${finish}`)
            .then((i)=> i.json())
            .then((i)=> setCatalogo(i.Search))
            .catch(e => console.log(e))     
    }, [finish])

    const infoCheck = useMemo(() =>{
      console.log("Se renderisa useMemo")
        return checkbox? [...catalogo].sort((a,b)=>a.Title.localeCompare(b.Title)):
        catalogo
    }, [checkbox,catalogo])

  return {catalogo: infoCheck,infoRender}
}