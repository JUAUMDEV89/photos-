import { FormEvent, useEffect, useState } from 'react'
import { Layout, Header, Button, Grid } from '../styles/layout';
import { api } from '../services/api';

type imagesProps = {
  id: string;
  width: number;
  height: number;
  urls:{
    full: string;
    small: string;
  }
}

function HomePage() {
   
    const [images, setImages] = useState<imagesProps []>([]);
    const [value, setValue] = useState('');

    useEffect(()=>{
      async function loadPhotos(){
         const response = await api.get(`/photos/?client_id=xV_KQ5oIkUZ5tB8Wk93nsIHnuMVxDjjbUX-W2Q1Cic0`);

         setImages(response.data);
      }

      loadPhotos()
    }, []);

    async function handleSearchImage(event: FormEvent){
        event.preventDefault();

        if(value.trim()){
          return;
        }

        const response = await api.get(`/photos/?client_id=xV_KQ5oIkUZ5tB8Wk93nsIHnuMVxDjjbUX-W2Q1Cic0&query=${value}`);
        
        setImages(response.data);
        console.log(images)
        setValue('');

    }

    return <Layout>
      <Header>
        <h1>Photo<span>+</span></h1>
        <Button>
          <input placeholder='Busque uma Imagem' value={value} type="text" name="search" onChange={(e)=>setValue(e.target.value)}  />
          <button onClick={()=>handleSearchImage}>Pesquisar</button>
        </Button>
        <button>Minha Galeria</button>
      </Header>
      <Grid>
         {
           images.map(image=>{
             return(
               <img src={image.urls.small} style={{ width: image.width / 16, height: image.height / 16 }} alt="" />
             )
           })
         }
      </Grid>
    </Layout>
  }
  
export default HomePage