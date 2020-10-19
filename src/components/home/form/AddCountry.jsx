import React, { Component } from "react";
import { connect } from "react-redux";
import { addCountry } from "./../../../redux/countryReducer/actions";

import { Card, Input, Button } from "./../Styles";
import cStyles from "./../../../styles/common.module.css";

class AddCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { country } = this.state;
    const { addCountry } = this.props;
    return (
      <>
        <Card>
          <div className={`${cStyles.alignCenter} ${cStyles.headerStyle}`}>
            ADD COUNTRY
          </div>
          <div>
            <Input
              type="text"
              name="country"
              value={country}
              onChange={this.handleChange}
              placeholder="eg. India"
            />
          </div>
          <div className={cStyles.alignCenter}>
            <Button onClick={() => addCountry(country)}>ADD</Button>
          </div>
        </Card>
      </>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  addCountry: (payload) => dispatch(addCountry(payload)),
});

export default connect(null, mapDispatchToProps)(AddCountry);
