import multer from 'multer';
//import di multer

//creazione di uno storage
const storage = multer.diskStorage({
    destination: "uploads/"
})

//il nostro setting di multer
export const multerOption ={}

//export dell'inizializzazione
export const initMulterMiddleware = ()=>{
    return multer({storage, ...multerOption})
}