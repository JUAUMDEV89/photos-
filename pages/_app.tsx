import { PhotosProvider } from '../context/photosContext';

import { GlobalStyle } from '../styles/global';

export default function MyApp({ Component, pageProps }) {
    return <PhotosProvider>
             <Component {...pageProps} />
             <GlobalStyle />           
           </PhotosProvider>
}