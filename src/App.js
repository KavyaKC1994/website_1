// import Head from 'next/head';
// import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from FakeStoreAPI
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <head>
        <title>Product Listing Page</title>
        <meta name="description" content="A page listing various products for sale." />
      </head>
      
      <header>
        <h1>Our Products</h1>
      </header>
      
      <main>
        <section className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-item">
              <image 
                src={product.image} 
                alt={product.title} 
                width={200} 
                height={200} 
                className="product-image" 
              />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p className="product-price">${product.price}</p>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <p> <img src="Product Card.jpg" alt='abc' /> &copy; 2024 Your Store. All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }
        .product-item {
          background: white;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          text-align: center;
        }
        h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        .product-price {
          color: green;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
