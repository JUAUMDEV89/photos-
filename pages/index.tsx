import { useEffect } from 'react'
import { Layout, Header } from '../styles/layout';
import { api } from '../services/api';

function HomePage() {
   
    useEffect(()=>{
      async function loadPhotos(){
         const response = await api.get(`/photos/?client_id=${process.env.PUBLIC_REACT_UNSPLASH_ACCESS_KEY}`);

         console.log(response);
      }

      loadPhotos()
    }, []);

    return <Layout>
      <Header>
        <h1>Photo<span>+</span></h1>
        <button>Minha Galeria</button>
      </Header>
    </Layout>
  }
  
export default HomePage