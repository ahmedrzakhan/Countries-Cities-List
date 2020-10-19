import React, { Component } from "react";
import { connect } from "react-redux";
import { getCity, updateCity } from "./../../../redux/cityReducer/actions";
import { getCountries } from "./../../../redux/countryReducer/actions";
import {
  Card,
  CardContainer,
  Div,
  Select,
  H4,
  H2,
  Button,
  Input,
  TextArea,
} from "./Styles";

class EditCityDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: null,
      country: "",
      city: "",
      population: "",
      average_income: "",
      description: "",
    };
  }

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  updateCityDetails = () => {
    const {
      country,
      city,
      population,
      average_income,
      description,
    } = this.state;

    const { id } = this.props.city[0] || {};
    const { updateCity, history } = this.props;

    const payload = {
      id,
      country,
      city,
      population,
      average_income,
      description,
    };

    updateCity(payload);

    history.push('/')
  };

  componentDidMount() {
    const { getCountries, match, getCity } = this.props;

    const { params } = match;
    getCountries();
    getCity(params.city).then(() => {
      const {
        city,
        country,
        population,
        average_income,
        description,
      } = this.props.city[0];

      this.setState({
        isMounted: true,
        city: city,
        country: country,
        population: population,
        average_income: average_income,
        description: description,
      });
    });
  }

  render() {
    const { countries } = this.props;
    console.log(this.state);
    const {
      country,
      population,
      city,
      average_income,
      description,
      isMounted,
    } = this.state;

    if (!isMounted) {
      return null;
    }

    return (
      <>
        <CardContainer>
          <Card>
            <Div center>
              <H2>Edit City Details</H2>
            </Div>

            <Div center>
              <H4>Country:</H4>
              <Select
                type="text"
                name="country"
                value={country}
                onChange={this.handleChange}
              >
                {countries.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </Select>
            </Div>

            <Div center>
              <H4>City:</H4>
              <Input
                type="text"
                name="city"
                value={city}
                onChange={this.handleChange}
              />
            </Div>
            <Div center>
              <H4>Population:</H4>
              <Input
                type="text"
                name="population"
                value={population}
                onChange={this.handleChange}
              />
            </Div>
            <Div center>
              <H4>Average Income:</H4>
              <Input
                type="text"
                name="average_income"
                value={average_income}
                onChange={this.handleChange}
              />
            </Div>
            <Div center>
              <H4>Description:</H4>
              <TextArea
                type="text"
                name="description"
                rows={4}
                value={description}
                onChange={this.handleChange}
              />
            </Div>
            <Div center>
              <Button onClick={this.goBack}>Go Back</Button>
              <Button edit onClick={this.updateCityDetails}>
                Update
              </Button>
            </Div>
          </Card>
        </CardContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: state.country.countries,
  city: state.city.city,
});

const mapDispatchToProps = (dispatch) => ({
  getCountries: () => dispatch(getCountries()),
  getCity: (payload) => dispatch(getCity(payload)),
  updateCity: (payload) => dispatch(updateCity(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCityDetails);
