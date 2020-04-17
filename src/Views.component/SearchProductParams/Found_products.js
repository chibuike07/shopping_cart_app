import React from "react";
import Image from "../../Components/Image/Image.component";
import SearchProductParamsStyles from "./ProductFound.module.css";
import { Categories } from "../../Collection.component/Categories.carts";

class FoundProducts extends React.Component {
  state = {
    wantedProduct: [],
    foundBySearch: []
  };
  Found = () => {
    let searchParams = this.props.match.params.items;
    let keys = Object.keys(Categories);
    console.log(keys);
    if (searchParams) {
      if (keys.includes(searchParams)) {
        // console.log(true);
        const foundProduct = JSON.parse(sessionStorage.getItem("foundProduct"));

        let items = foundProduct.filter(searchItems => {
          return searchItems.id < 11;
        });
        console.log(items);
        console.log(this.props.match);
        this.setState(prev => ({
          wantedProduct: [...prev.wantedProduct, ...items]
        }));
      } else {
        console.log(false);
      }
    }
  };

  //function for product searched by name of the product
  FoundByProductName = () => {
    //get the search params value
    let searchParams = this.props.match.params.items;
    let arr = []; //empty to spread the over all object into it
    //loop through the object to get the get all the products object
    for (let values in Categories) {
      let value = Categories[values].products;
      arr.push(...value); //spreading the object into an empty array
    }
    //looping through each of the object
    arr.forEach(datas => {
      //check if params exist
      if (searchParams) {
        //check if it the params value is existing in the datas,name
        if (datas.name.includes(searchParams)) {
          //getting the found product from the storage
          const foundProducts = JSON.parse(
            sessionStorage.getItem("search_by_productNames")
          );
          //get product list below the id of 10
          let items = foundProducts.filter(searchItems => {
            return searchItems.id < 11;
          });
          //setting items to the state
          this.setState({
            foundBySearch: items
          });
        } else {
          //print result if if state holds no value
          console.log(false);
        }
      }
    });

    //
  };

  //calling the function on componentDidMount
  componentDidMount() {
    this.Found();
    this.FoundByProductName();
  }

  render() {
    //destructured styles
    const { display } = SearchProductParamsStyles;
    return (
      <div>
        <div className={display}>
          {/* mapping the found product by categories */}
          {/* making sure that the state is in async with the datas before looping */}
          {this.state.wantedProduct && this.state.wantedProduct ? (
            // destructured products properties
            this.state.wantedProduct.map(({ name, amount, image, id }) => (
              <div key={id}>
                <Image src={image} alt={image} />
                <div>{name}</div>
                <div>{amount}</div>
              </div>
            ))
          ) : (
            <div>hello</div>
          )}
        </div>

        <div className={display}>
          {/* mapping the found product by product name */}
          {/* making sure that the state is in async with the datas before looping */}
          {this.state.foundBySearch && this.state.foundBySearch ? (
            // destructured products properties
            this.state.foundBySearch.map(({ name, amount, image, id }, i) => (
              <div key={i}>
                <Image src={image} alt={image} />
                <div>{name}</div>
                <div>{amount}</div>
              </div>
            ))
          ) : (
            <div>search not found</div>
          )}
        </div>
      </div>
    );
  }
}

export default FoundProducts;
