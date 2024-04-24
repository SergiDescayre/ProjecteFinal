import React, { useEffect, useState } from "react";
import { useFestivalContext } from "../context/FestivalContext";

const FormSearchHome = () => {
  const { setFestivals, festivals, getFestivals,setError } = useFestivalContext();
  const [city, setCity] = useState("");
  const [dataStart, setDataStart] = useState("");
  const [dataEnd, setDataEnd] = useState("");

  useEffect(() => {
    return () => {getFestivals()
    setError("") }
    ;
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault()
      const filtered = festivals.filter(event => {
        const start = new Date(event.data_start);
        const end = new Date(event.data_end);
        const rangeStart = new Date(dataStart);
        const rangeEnd = new Date(dataEnd);
        return event.city.toLowerCase() === city.toLowerCase() && start <= rangeEnd && end >= rangeStart;
    });
    if (filtered.length === 0) {
      setError("No se encontraron eventos en el rango de fechas seleccionado.");
    } else {
      setError("");
    }
    
    setFestivals(filtered);
  };
  


  return (
   
      <form onSubmit={handleSubmit}>
      <div className="join  join-vertical  lg:join-horizontal md:px-[70px] flex items-center justify-center pb-10">
        <div>
          <input
            name="city"
            className="input  w-64 rounded-none rounded-tr-md rounded-tl-md lg:rounded-none lg:rounded-tl-md lg:rounded-bl-md "
            placeholder="¿Donde?"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <label className="bg-white p-3 w-64 lg:w-16 join-item">Desde:</label>
        <input
          id="data_start"
          className="input join-item w-64 lg:w-40 "
          type="date"
          placeholder="fecha"
          onChange={(e) => setDataStart(e.target.value)}
          required
        />
        <label className="bg-white p-3 w-64 lg:w-16 join-item">Hasta:</label>
        <input
          id="data_end"
          className="input join-item w-64 lg:w-40"
          type="date"
          placeholder="fecha"
          onChange={(e) => setDataEnd(e.target.value)}
          required
        />
        <input
          type="submit"
          className="btn border-none join-item bg-orange-200 hover:bg-zinc-900 text-zinc-900 hover:text-orange-200 w-64 lg:w-28"
        />
      </div>
      </form>
  
  );
};

export default FormSearchHome;
