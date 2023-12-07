import { useLoaderData } from "react-router-dom";

function Description() {
  const productDetails = useLoaderData();
  console.log(productDetails);

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        {productDetails ? (
          <div
            className="border rounded-lg shadow-xl bg-base-200 card card-side "
            key={productDetails.id}
          >
            <figure className="w-full">
              <img
                src={productDetails.image}
                alt={productDetails.title}
                className="w-full h-80"
              />
            </figure>
            <div className="card-body">
              <h3 className="font-medium text-info-content product-title text-m card-title">
                {productDetails.title}
              </h3>
              <p className="font-light text-s">{productDetails.description}</p>
              <p className="text-xl font-bold text-info-content">
                Price: ${productDetails.price}
              </p>
              <div className="justify-end card-actions">
                {/* //TODO : Make Common Button Component */}
                <button className="btn btn-outline btn-accent">Buy Now</button>
              </div>
            </div>
          </div>
        ) : (
          <p>No product information available.</p>
        )}
      </div>
    </div>
  );
}

export default Description;
