import React from 'react'

const FormSearchHome = () => {
  return (
    <>
   
    <div className="join  join-vertical  md:join-horizontal md:px-[70px] flex items-center justify-center pb-10">
            <div>
              <input
                className="input  w-64 rounded-none rounded-tr-md rounded-tl-md md:rounded-none md:rounded-tl-md md:rounded-bl-md "
                placeholder="¿Donde?"
              />
          </div>
          <label className="bg-white p-3 w-64 md:w-16 join-item" >Desde:</label>
          <input
                id="data_start"
                className="input join-item w-64 md:w-40 "
                type="date"
                placeholder="fecha"
                required
              />
              <label className="bg-white p-3 w-64 md:w-16 join-item" >Hasta:</label>
              <input
                id="data_end"
                className="input join-item w-64 md:w-40"
                type="date"
                placeholder="fecha"
                required
              />
            <button className="btn border-none join-item bg-orange-200 hover:bg-zinc-900 text-zinc-900 hover:text-orange-200 w-64 md:w-28">Buscar</button>
        </div>
    </>
  )
}

export default FormSearchHome