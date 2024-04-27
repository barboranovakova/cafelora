import './indexDrink.css';
import { Layer } from '../Layer/indexLayer.jsx';

export const Drink = ({ name, image }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src="/cups/espresso.png" />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          <Layer color="#feeeca" label="espresso" />
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button className="order-btn">Objednat</button>
      </form>
    </div>
  );
};
