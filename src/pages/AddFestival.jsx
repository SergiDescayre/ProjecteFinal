import { useState } from "react"

const AddFestival = () => {
    const [name, setName] = useState(null)
    const [city, setCity] = useState(null)
    const [modality, setModality] = useState([])
    const [dataStart ,setDataStart] = useState(null)
    const [dataEnd ,setDataEnd] = useState(null)
    const [image, setImage] = useState(null)
    const [url,setUrl] = useState(null)
 

    const handleCheckBox = (e) => {
        if(e.target.checked){
            setModality([...modality, e.target.value])
        }else{
            setModality(modality.filter(item => item !== e.target.value))
        }
    }

    console.log(image)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("enviado")
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2">
            <label htmlFor="name">Nombre del festival</label>
            <input id="name" className="input input-bordered w-full max-w-xs"  type="text" onChange={(e)=> setName(e.target.value)}/>
        
            <label htmlFor="city">Ciudad</label>
            <input id="city" className="input input-bordered w-full max-w-xs"  type="text" onChange={(e)=> setCity(e.target.value)}/>

            <label>Modalidad/es</label>
            <span className="label-text">Lindy Hop</span> 
            <input type="checkbox"  value="Lindy Hop" className="checkbox" onChange={(handleCheckBox)} />
            
            <span className="label-text">Blues</span> 
            <input type="checkbox"  value="Blues" className="checkbox" onChange={(handleCheckBox)} />
        
            <span className="label-text">Balboa</span> 
            <input type="checkbox"  value="Balboa" className="checkbox" onChange={(handleCheckBox)} />

            <label htmlFor="data_start">Fecha Inicio</label>
            <input id="data_start" className="input input-bordered w-full max-w-xs"  type="date" onChange={(e)=> setDataStart(e.target.value)}/>

            <label htmlFor="data_end">Fecha Fin</label>
            <input id="data_end" className="input input-bordered w-full max-w-xs"  type="date" onChange={(e)=> setDataEnd(e.target.value)}/>

            <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={(e) => setImage(e.target.files[0])}/>

            <label htmlFor="url">Url del festival</label>
            <input type="text" id="url" className="input input-bordered w-full max-w-xs" onChange={(e) => setUrl(e.target.value)} />

            <button className="btn btn-neutral" onClick={handleSubmit}>Enviar</button>
        </form>
        </>
    )
}

export default AddFestival