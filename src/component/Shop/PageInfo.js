import React from "react";
class Client extends React.Component {
  render() {
    return (
      <div className="PageInfo row m-b-20">
        <div className="col-lg-6 p-t-10 m-b-20">
          <h3 className="m-b-20">A Monochromatic Spring ’15</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            sit, exercitationem, consequuntur, assumenda iusto eos commodi
            alias.
          </p>
        </div>
        <div className="col-lg-3">
          <div className="order-select">
            <h6>Sort by</h6>
            <p>Showing 1&ndash;12 of 25 results</p>
            <form method="get">
              <select className="form-control">
                <option value="order" >
                  Default sorting
                </option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by newness</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </form>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="order-select">
            <h6>Sort by Price</h6>
            <p>From 0 - 190$</p>
            <form method="get">
              <select className="form-control">
                <option value="">
                  0$ - 50$
                </option>
                <option value="">51$ - 90$</option>
                <option value="">91$ - 120$</option>
                <option value="">121$ - 200$</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Client;
