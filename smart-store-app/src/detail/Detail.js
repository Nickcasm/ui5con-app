import React, { Component } from "react";
import products from "../data/products.json";
import Header from "../header/Header";
import "./Detail.css";

import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/Badge";
import "@ui5/webcomponents/dist/Dialog";
import "@ui5/webcomponents/dist/Popover";
import "@ui5/webcomponents/dist/Select";
import "@ui5/webcomponents/dist/DatePicker";
import "@ui5/webcomponents/dist/TextArea";

const getBadgeType = (type) => {
  switch (type) {
    case "In-Stock":
      return "8";
    case "Deterioating":
      return "2";
    case "Re-Stock":
      return "1";
    default:
      return "0";
  }
};
class Detail extends Component {
  state = {
    products: [...products],
    filteredProducts: [...products],
    filterType: "all",
  };

  filterPerishableProducts(items) {
    return items.filter((product) => product.perishable);
  }

  filterNoPerishableProducts(items) {
    return items.filter((product) => !product.perishable);
  }

  filterVegsProducts(items) {
    return items.filter((product) => product.vegs);
  }

  applyFilter(filterType) {
    const products = this.filterItems(filterType, this.state.products);

    this.setState({
      ...this.state,
      filteredProducts: products,
      filterType: filterType,
    });
  }

  filterItems(filterType, items) {
    let filteredProducts = [];

    switch (filterType) {
      case "all":
        filteredProducts = items;
        break;
      case "noPerishable":
        filteredProducts = this.filterNoPerishableProducts(items);
        break;
      case "perishable":
        filteredProducts = this.filterPerishableProducts(items);
        break;
      case "alerts":
        filteredProducts = this.filterAlertProducts(items);
        break;
      default:
        filteredProducts = items;
        break;
    }

    return filteredProducts;
  }

  filterAlertProducts(items) {
    return items.filter(
      (product) =>
        product.status === "Deterioating" || product.status === "Re-Stock"
    );
  }

  render() {
    return (
      <div className="detail-page">
        <Header
          products={this.state.products}
          nonPerishableCount={
            this.filterNoPerishableProducts(this.state.products).length
          }
          perishableCount={
            this.filterPerishableProducts(this.state.products).length
          }
          alertCount={this.filterAlertProducts(this.state.products).length}
          vegsCount={this.filterVegsProducts(this.state.products).length}
          tabPress={this.applyFilter.bind(this)}
        />

        <main className="detail-page-content">
          <ui5-table>
            <ui5-table-column slot="columns">
              <ui5-label class="table-column-header-content">Product</ui5-label>
            </ui5-table-column>

            <ui5-table-column slot="columns">
              <ui5-label class="table-column-header-content">Price</ui5-label>
            </ui5-table-column>

            <ui5-table-column slot="columns">
              <ui5-label class="table-column-header-content">
                Location
              </ui5-label>
            </ui5-table-column>

            <ui5-table-column slot="columns">
              <ui5-label class="table-column-header-content">
                Order date
              </ui5-label>
            </ui5-table-column>

            <ui5-table-column slot="columns">
              <ui5-label class="table-column-header-content">Image</ui5-label>
            </ui5-table-column>

            <ui5-table-column slot="columns">
              <ui5-label
                class="table-column
                                header-content
                            "
              >
                Status
              </ui5-label>
            </ui5-table-column>

            {this.state.filteredProducts.map((item) => (
              <ui5-table-row key={item.key}>
                <ui5-table-cell>
                  <ui5-label class="table-cell-content">
                    <b>{item.name}</b>
                  </ui5-label>
                </ui5-table-cell>
                <ui5-table-cell>
                  <span className="table-cell-content">{item.price}</span>
                </ui5-table-cell>
                <ui5-table-cell>
                  <span className="table-cell-content">{item.location}</span>
                </ui5-table-cell>
                <ui5-table-cell>
                  <span className="table-cell-content">{item.orderDate}</span>
                </ui5-table-cell>
                <ui5-table-cell>
                  <span className="table-cell-content">
                    <img
                      alt=""
                      className="image-cell"
                      src={process.env.PUBLIC_URL + item.img}
                    />
                  </span>
                </ui5-table-cell>
                <ui5-table-cell>
                  <span className="table-cell-content">
                    <ui5-badge color-scheme={getBadgeType(item.status)}>
                      {item.status}
                    </ui5-badge>
                  </span>
                </ui5-table-cell>
              </ui5-table-row>
            ))}
          </ui5-table>
        </main>
      </div>
    );
  }
}

export default Detail;
