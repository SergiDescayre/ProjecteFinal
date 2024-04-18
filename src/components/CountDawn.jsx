import { useEffect,useState } from 'react'

const CountDawn = ({date}) => {

// Fecha de finalización del countdown
  const endDate = new Date(date).getTime();
  // Estado para almacenar el tiempo restante
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Función para calcular el tiempo restante
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  // Función para actualizar el tiempo restante cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return (
        <div className="grid grid-cols-4 gap-1 text-center p-3">
            <div className="flex flex-col p-2 text-orange-200 items-center w-18 ">
                <span className="countdown text-2xl">
                    <span style={{ "--value": timeRemaining.days }}></span>
                </span>
                <span className="text-xs">Dias</span>
            </div>
            <div className="flex flex-col p-2  text-orange-200 items-center w-18 ">
                <span className="countdown text-2xl">
                    <span style={{ "--value": timeRemaining.hours }}></span>
                </span>
                <span className="text-xs">Horas</span>
            </div>
            <div className="flex flex-col p-2  text-orange-200 items-center w-18 ">
                <span className="countdown text-2xl">
                    <span style={{ "--value": timeRemaining.minutes }}></span>
                </span>
                <span className="text-xs">Min</span>
            </div>
            <div className="flex flex-col p-2  text-orange-200 items-center w-18 ">
                <span className="countdown text-2xl">
                    <span style={{ "--value": timeRemaining.seconds }}></span>
                </span>
                <span className="text-xs">Seg</span>
            </div>
        </div>
    )
}

export default CountDawn
