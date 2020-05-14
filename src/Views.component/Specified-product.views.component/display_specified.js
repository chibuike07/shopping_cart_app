import React from "react";
import { Categories } from "../../Collection.component/Categories.carts";
import CustomImage from "../../Components/Image/Image.component";

class DisplaySpecifiedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specifyProduct: null,
      joinSpace: ""
    };
  }

  handleTargetIndex = async () => {
    let res = [];
    let target = this.props.match.params.product;
    let splitTarget = await target.split(" ");
    let JoinTwoWord = await splitTarget.splice(1).join(" ");
    // const displayable =
    //   this.state.specifyProduct.length > 0 &&
    //   this.state.specifyProduct.filter(v => String(v.id) === splitTarget[0]);
    // console.log(displayable);
    this.setState({ joinSpace: JoinTwoWord });
    for (let product in Categories) {
      let displayable = Array.of(Categories[product]).filter(
        v => v.id === parseInt(splitTarget)
      );

      // console.log(displayable);
      let views = displayable.map(({ products }) =>
        products.find(v => v.name === this.state.joinSpace)
      );
      // console.log(views);
      // res.push();
      this.setState({ specifyProduct: views });
    }
  };

  componentDidMount() {
    if (this.props.match.params.product) {
      this.handleTargetIndex();
    }
  }
  render() {
    console.log(this.state.specifyProduct);
    const product =
      this.state.specifyProduct &&
      this.state.specifyProduct.map(({ name, amount, id, image }) => {
        return (
          <div key={id}>
            <CustomImage src={image} alt={"product"} />
            <div>
              <p>{amount}</p>
              <p>{name}</p>
            </div>
          </div>
        );
      });

    return <div>{product}</div>;
  }
}

export default DisplaySpecifiedItem;
