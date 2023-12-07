import PropTypes from "prop-types";

function Paginator({ currentPage, totalPages, onPageChange, products }) {
  const handleClick = (pageNum) => {
    if (pageNum !== currentPage && pageNum >= 1 && pageNum <= totalPages) {
      onPageChange(pageNum);
    }
  };
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const visibleProducts = products ? products.slice(startIndex, endIndex) : [];

  return (
    <div className="mt-2 mb-2 text-center">
      <div className="join">
        <button
          className="join-item btn"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button className="join-item btn" disabled>
          Page {currentPage}
        </button>
        <button
          className="join-item btn"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 shadow sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {visibleProducts.map((product) => (
          <div
            className="border rounded-lg bg-base-200 w-80 card"
            key={product.id}
          ></div>
        ))}
      </div>
    </div>
  );
}

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
      }).isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export default Paginator;
