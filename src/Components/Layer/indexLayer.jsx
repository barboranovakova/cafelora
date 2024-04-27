import './indexLayer.css';

export const Layer = ({ color, label }) => {
  return (
    <div className="layer">
      <div className="layer__color" style={{ color }}></div>
      <div className="layer__label">{label}</div>
    </div>
  );
};
