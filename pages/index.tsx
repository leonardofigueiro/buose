import Carroussel from '../src/Components/Carroussel';
import ContentOne from '../src/Components/ContentOne';
import ContentThree from '../src/Components/ContentThree';
import ContentTwo from '../src/Components/ContentTwo';
import Footer from '../src/Components/Footer';
import Header from '../src/Components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Carroussel />
      <ContentOne />
      <ContentTwo/>
      <ContentThree/>
      <Footer/>
    </>
  );
}
