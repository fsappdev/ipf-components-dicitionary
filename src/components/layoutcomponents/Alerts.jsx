
const Danger = () => {
   console.info("render alert danger")
   return (
      <div className="alert alert-danger" role="alert">
         Alerta de error!🆘
      </div>
   )
}

const Primary = () => {
   console.info("render alert primary")
   return (
      <div className="alert alert-primary" role="alert">
         Aviso de notificación ☑
      </div>
   )
}

const Success = () => {
   console.info("render alert success")
   return (
      <div className="alert alert-success" role="alert">
         Aviso de accíon exitosa ✅
      </div>
   )
}

const alertDictionary = {
   danger: ()=>(<Danger/>),
   primary: ()=>(<Primary/>),
   success: () =>(<Success/>) 
}

export {alertDictionary}