import { render } from '@czechitas/render';
import { Header } from '../Components/Header.jsx';
import '../global.css';
import './index.css';
import { Banner } from '../Components/Banner.jsx';
import { Menu } from '../Components/Menu.jsx';
import { Gallery } from '../Components/Gallery.jsx';
import { Contact } from '../Components/Contact.jsx';
import { Footer } from '../Components/Footer.jsx';

const drinkApi = await fetch('http://localhost:4000/api/drinks');
const json = await drinkApi.json();
//console.log(json.data);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={json.data} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

//------block hamburger
const navBtn = document.querySelector('.nav-btn');
navBtn.addEventListener('click', () => {
  document.querySelector('.rollout-nav').classList.toggle('nav-closed');
});
const rolloutNav = document.querySelector('.rollout-nav');
rolloutNav.addEventListener('click', () => {
  rolloutNav.classList.add('nav-closed');
});

const formElems = document.querySelectorAll('.drink__controls');
console.log(formElems);
formElems.forEach((oneForm) => {
  oneForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    console.log(evt.target.dataset.id);
  });
});
