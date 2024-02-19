import { useEffect, useState } from "react";

import { TABS } from "./../../constants/tabs";
import owlCarousels from "../../utils/owlCarousels";
import ProductCard from "../../components/ProductCard";

const HotProductSection = ({
  featuredProducts,
  onSaleProducts,
  topRatedProducts,
}) => {
  const [selectedTab, setSelectedTab] = useState(TABS.featured);
  useEffect(() => {
    owlCarousels();
  }, [selectedTab, featuredProducts, onSaleProducts, topRatedProducts]);

  const _onTabChange = (e, tab) => {
    e.preventDefault();
    setSelectedTab("");
    setTimeout(() => {
      setSelectedTab(tab);
    }, 200);
    // console.log("renderProducts", renderProducts);
    // console.log("tab", tab);
    // console.log("selectedTab", selectedTab);
  };
  //   console.log("onSaleProducts", onSaleProducts);
  //   console.log("featuredProducts", featuredProducts);
  //   console.log("topRatedProducts", topRatedProducts);
  const _getSelectedProducts = (tab) => {
    switch (tab) {
      case TABS.featured:
        return featuredProducts;
      case TABS.on_sale:
        return onSaleProducts;
      case TABS.top_rated:
        return topRatedProducts;

      default:
        return [];
    }
  };
  const renderProducts = _getSelectedProducts(selectedTab);
  return (
    <div className="container featured" style={{ height: 665 }}>
      <ul
        className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className={`nav-link ${
              selectedTab === TABS.featured ? "active" : ""
            }`}
            id="products-featured-link"
            data-toggle="tab"
            href="#products-featured-tab"
            role="tab"
            aria-controls="products-featured-tab"
            aria-selected="true"
            onClick={(e) => _onTabChange(e, TABS.featured)}
          >
            Featured
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              selectedTab === TABS.on_sale ? "active" : ""
            }`}
            id="products-sale-link"
            data-toggle="tab"
            href="#products-sale-tab"
            role="tab"
            aria-controls="products-sale-tab"
            aria-selected="false"
            onClick={(e) => _onTabChange(e, TABS.on_sale)}
          >
            On Sale
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              selectedTab === TABS.top_rated ? "active" : ""
            }`}
            id="products-top-link"
            data-toggle="tab"
            href="#products-top-tab"
            role="tab"
            aria-controls="products-top-tab"
            aria-selected="false"
            onClick={(e) => _onTabChange(e, TABS.top_rated)}
          >
            Top Rated
          </a>
        </li>
      </ul>
      <div className="tab-content tab-content-carousel">
        <div
          className={`tab-pane p-0 fade ${
            renderProducts?.length > 0 ? "show active" : ""
          }`}
          id="products-featured-tab"
          role="tabpanel"
          aria-labelledby="products-featured-link"
        >
          {renderProducts?.length > 0 && (
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                                  "nav": true, 
                                                  "dots": true,
                                                  "margin": 20,
                                                  "loop": false,
                                                  "responsive": {
                                                      "0": {
                                                          "items":2
                                                      },
                                                      "600": {
                                                          "items":2
                                                      },
                                                      "992": {
                                                          "items":3
                                                      },
                                                      "1200": {
                                                          "items":4
                                                      }
                                                  }
                                              }'
            >
              {renderProducts.map((product, index) => {
                return (
                  <ProductCard key={product.id || index} product={product} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotProductSection;
