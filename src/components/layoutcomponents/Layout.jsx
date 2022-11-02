
import reactLogo from '../../assets/react.svg'
import FormBasic from './formularios/FormBasic'


const Header = () => {
   return (
      <>
         <div className='d-flex justify-content-center mt-5'>
            <a href="https://vitejs.dev" target="_blank">
               <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1 className='text-center'>Diccionario de componentes + React</h1>
      </>
   )
}

const layoutDictionary = {
   "encabezado de página" : ()=>(<Header/>),
   "formulario básico" : () =>(<FormBasic/>) 
}

export {layoutDictionary}