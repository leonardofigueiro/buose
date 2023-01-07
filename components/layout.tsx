import { PropsWithChildren } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Script from 'next/script';



export default function Layout({children}: PropsWithChildren){
  return (
    <>
      <Header/>
      <main> {children}</main>
      <Footer/>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossOrigin="anonymous"/>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"/>
    
    </>
  );
}