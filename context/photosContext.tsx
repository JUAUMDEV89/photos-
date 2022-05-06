import { createContext, useState, useEffect, SetStateAction, Dispatch } from 'react';

import { api } from '../services/api';

type photosProps = {
    id: string;
    total: number;
    width: number;
    height: number;
    urls:{
      full: string;
      small: string;
    }
}

type photosContextProps = {
    images: photosProps[];
    setImages: Dispatch<SetStateAction<photosProps[]>>;
    setValue: Dispatch<SetStateAction<string>> ;
    value: string;
    handleSearchImage: ()=>Promise<void>;
}
  
export const PhotosContext = createContext({} as photosContextProps);

export function PhotosProvider({ children }){

    const [images, setImages] = useState<photosProps []>([]);
    const [value, setValue] = useState('');
    
    useEffect(()=>{
        async function loadPhotos(){
           const response = await api.get(`/photos/client_id=xV_KQ5oIkUZ5tB8Wk93nsIHnuMVxDjjbUX-W2Q1Cic0`);
  
           setImages(response.data.results);
        }
  
        loadPhotos()
    }, []); 

    async function handleSearchImage(){
    
        const response = await api.get(`/search/photos?query=${value}&client_id=xV_KQ5oIkUZ5tB8Wk93nsIHnuMVxDjjbUX-W2Q1Cic0`);
        
        setImages(response.data.results);
        console.log(response);
        
        setValue('');

    }

   return <PhotosContext.Provider value={{ 
     images,
     setImages,
     setValue,
     value,
     handleSearchImage
   }}>
       { children }
   </PhotosContext.Provider>
}