import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const formAddFestival = () => {
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [modality, setModality] = useState([]);
  const [dataStart, setDataStart] = useState(null);
  const [dataEnd, setDataEnd] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setModality([...modality, e.target.value]);
    } else {
      setModality(modality.filter((item) => item !== e.target.value));
    }
  };

  //subir imagen a storage
  const uploadImageToStorage = async (img) => {
    const storage = getStorage()
    const storageRef = ref(storage,img.name)
    await uploadBytes(storageRef,img)
    const urlImage = await getDownloadURL(storageRef)
    return urlImage
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImageToStorage(image)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="md:w-[600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 mx-4">
          <div className="w-full">
            <label htmlFor="name">Nombre del festival</label>
            <input
              id="name"
              className="input input-bordered w-full"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="city">Ciudad</label>
            <input
              id="city"
              className="input input-bordered w-full"
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>

        <div className="mx-4 mt-5 text-center">
          <label>Modalidad/es</label>
          <div className="flex justify-between  md:justify-around gap-2 mt-5">
            <div className="flex flex-col items-center">
              <span className="label-text">Lindy Hop</span>
              <input
                type="checkbox"
                value="Lindy Hop"
                className="checkbox"
                onChange={handleCheckBox}
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="label-text">Blues</span>
              <input
                type="checkbox"
                value="Blues"
                className="checkbox"
                onChange={handleCheckBox}
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="label-text">Balboa</span>
              <input
                type="checkbox"
                value="Balboa"
                className="checkbox"
                onChange={handleCheckBox}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 mx-4 mt-5">
          <div className="w-full">
            <label htmlFor="data_start">Fecha Inicio</label>
            <input
              id="data_start"
              className="input input-bordered w-full"
              type="date"
              onChange={(e) => setDataStart(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="data_end">Fecha Fin</label>
            <input
              id="data_end"
              className="input input-bordered w-full"
              type="date"
              onChange={(e) => setDataEnd(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 mx-4 mt-5">
          <div className="w-full">
          <label htmlFor="image">Imagen de portada</label>
            <input
                id="image"
              type="file"
              className="file-input file-input-bordered w-full"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="w-full">
            <label htmlFor="url">Url del festival</label>
            <input
              type="text"
              id="url"
              className="input input-bordered w-full "
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-5 mx-4 mt-5">
        <button className="btn btn-neutral w-full" onClick={handleSubmit}>
          Enviar
        </button>
        </div>
        </div>
       
      </form>
    </>
  );
};

export default formAddFestival;
