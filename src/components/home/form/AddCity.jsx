import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Card, Input, Button, Select, Top, TextArea } from "../Styles";
import cStyles from "./../../../styles/common.module.css";
import { addCity } from "../../../redux/cityReducer/actions";

class AddCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "India",
      city: "",
      population: "",
      average_income: "",
      description: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    const { city, country, population, average_income, description } = this.state;
    const { addCity } = this.props;
    const item = {
      id: uuidv4(),
      city,
      country,
      population,
      average_income,
      description
    };

    addCity(item);
  };

  render() {
    const { city, country, population, average_income, description } = this.state;
    const { countries } = this.props;
    return (
      <>
        <Card>
          <div className={`${cStyles.alignCenter} ${cStyles.headerStyle}`}>
            ADD CITY
          </div>

          <div className={cStyles.alignCenter} style={{ marginTop: 10 }}>
            Country:
            <Select name="country" value={country} onChange={this.handleChange}>
              {countries.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <Top>City:</Top>
              <Top>Population:</Top>
              <Top>Average Income:</Top>
              <Top>Description:</Top>
            </div>
            <div>
              <div>
                <Input
                  type="text"
                  name="city"
                  value={city}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <Input
                  type="Number"
                  name="population"
                  value={population}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <Input
                  type="Number"
                  name="average_income"
                  value={average_income}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <TextArea
                  type="text"
                  name="description"
                  rows={4}
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className={cStyles.alignCenter}>
            <Button onClick={this.handleAdd}>ADD</Button>
          </div>
        </Card>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: state.country.countries,
});

const mapDispatchToProps = (dispatch) => ({
  addCity: (payload) => dispatch(addCity(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCity);
