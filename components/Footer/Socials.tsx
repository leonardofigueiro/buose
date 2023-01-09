import Facebook from '../../public/icons/facebook.svg';
import Instagram from '../../public/icons/instagram.svg';
import Twitter from '../../public/icons/twitter.svg';
import Linkedin from '../../public/icons/linkedin.svg';

export default function Socials() {
  return (
    <div className="d-flex gap-2 mt-4">
      <a href='#'><Facebook/></a>
      <a target='_blank' href='https://www.instagram.com/buosearquitetura/' rel="noreferrer"><Instagram/></a>
      <a href='#'><Twitter/></a>
      <a href='#'><Linkedin/></a>
    </div>
  );
}