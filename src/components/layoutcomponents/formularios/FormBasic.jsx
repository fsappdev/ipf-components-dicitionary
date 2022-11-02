import React from 'react'

const FormBasic = () => {
   console.info("render form")
   return (
      <form>
         <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">nunca divulgaremos su direccíon de correo 🤐.</div>
         </div>
         <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
            <div id="passHelp" className="form-text">debe tener un mínimo de 8 caracteres 🚧⚠.</div>
         </div>
         <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Guardar mi sesión</label>
         </div>
         <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
   )
}

export default FormBasic