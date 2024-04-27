import { render } from '@czechitas/render';
import { Header } from '../Components/Header.jsx';
import '../global.css';
import './index.css';
import { Banner } from '../Components/Banner.jsx';
import { Menu } from '../Components/Menu.jsx';
import { Gallery } from '../Components/Gallery.jsx';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />

      <section>
        <div className="container">
          <h2>Kde nás najdete</h2>
          <div className="contact">
            <div className="contact__address">
              Na Mýtě 240 <br />
              514 03 Byšky nad Jizerou <br />
              Tel: +420 775 334 427
            </div>
            <table className="contact__hours">
              <tr>
                <td>Pondělí</td>
                <td>ZAVŘENO</td>
              </tr>
              <tr>
                <td>Úterý</td>
                <td>11:00 - 22:00</td>
              </tr>
              <tr>
                <td>Středa</td>
                <td>11:00 - 22:00</td>
              </tr>
              <tr>
                <td>Čtvrtek</td>
                <td>11:00 - 22:00</td>
              </tr>
              <tr>
                <td>Sobota</td>
                <td>9:00 - 02:00</td>
              </tr>
              <tr>
                <td>Neděle</td>
                <td>9:00 - 02:00</td>
              </tr>
            </table>
            <img className="contact__map" src="./img/map.png" />
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="container">
        <div className="footer__content">
          Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
        </div>
      </div>
    </footer>
  </div>,
);
