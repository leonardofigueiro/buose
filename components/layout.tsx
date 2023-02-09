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
    
    </>
  );
}