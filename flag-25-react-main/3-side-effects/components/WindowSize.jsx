import { useEffect } from "react";
import { useState } from "react";

export default function WindowSize() {
  const [size, setSize] = useState(getSize());

  function getSize(){
    return{
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }
  useEffect(() => {
    console.log(size.width);

    window.addEventListener('resize', handleResize, false);

    function handleResize(){
      setSize(getSize());
    }

    return () => { //Cleanup function => Executado sempre antes da componente ser destruída / "retirada", e antes de cada render da componente.
      window.removeEventListener('resize', handleResize, false);
    }
  }, [])
  //Array de dependências vazia => Só é executado no início da construção da componente.
  //Array de dependências do Effect => Define quando é executado o meu Effect.
  //Classes, componentDidMount()
  return (
    <>
      <p>Width: {size.width} ,  Height: {size.height} </p>
    </>
  )
}
