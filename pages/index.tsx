import { useContext } from 'react';

import { PhotosContext } from '../context/photosContext';

import { Layout, Header, Button, Grid, Infos } from '../styles/layout';
import { BsFillImageFill, BsFillPeopleFill, BsBraces } from "react-icons/bs";

function HomePage() {
    
    const { images, setImages, setValue, value, handleSearchImage } = useContext(PhotosContext);
    
    return <Layout>
      <Header>
        <h1>Photo<span>+</span></h1>
        <Button>
          <input placeholder='Busque uma Imagem' value={value} type="text" name="search" onChange={(e)=>setValue(e.target.value)}  />
          <button onClick={()=>handleSearchImage()}>Pesquisar</button>
        </Button>
        <button>Minha Galeria</button>
      </Header>
      <Infos>

        <div>
          <BsBraces color='gray' fontSize={30} />
          <div>
            <h3>1.3B</h3>
            <span>requests</span>
          </div>
        </div>

        <div>
          <BsFillImageFill color='gray' fontSize={30} />
          <div>
            <h3>500k</h3>
            <span>photos</span>
          </div>
        </div>

        <div>
          <BsFillPeopleFill color='gray' fontSize={30} />
          <div>
            <h3>10k</h3>
            <span>photographers</span>
          </div>
        </div>
      </Infos>
      <Grid>
         {
           images.map(image=>{
             return(
               <img id={image.id} src={image.urls.small} style={{ width: image.width / 26, height: image.height / 26 }} alt="" />
             )
           })
         }
      </Grid>
    </Layout>
  }
  
export default HomePage