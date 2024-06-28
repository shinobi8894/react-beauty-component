import "./style.css";

export default function Card() {

  return (
    <div className="shinobi-card">
      <img
        src="https://i.postimg.cc/FRX37FKk/pixlr-image-generator-6f80252f-8fce-4f01-b692-d561fe7663ec.png"
        alt="card"
      />
      <div className="card-content">
        <h2>Product Name</h2>
        <p>
          The adidas is a premium athletic shoe designed for comfort and
          performance.
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
