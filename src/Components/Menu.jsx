import { Drink } from './Drink/indexDrink.jsx';
import { Layer } from './Layer/indexLayer.jsx';
import './Menu.css';

export const Menu = ({ drinks }) => {
  console.log(drinks);

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinks.map((drink) => {
            return (
              <Drink
                key={drink.id}
                name={drink.name}
                ordered={drink.ordered}
                layers={drink.layers}
                image={drink.image}
              />
            );
          })}
        </div>

        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
