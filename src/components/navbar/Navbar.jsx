import React, { Component } from "react";
import { connect } from "react-redux";
import {
  sortData,
  filterByCountry,
  itemsPerPage,
} from "./../../redux/cityReducer/actions";
import { getCountries } from "./../../redux/countryReducer/actions";
import { Nav, Select, Flex, FlexRow, Div } from "./Styles";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      population: "",
      average_income: "",
      rows_per_page: 5,
      country: "",
    };
  }

  handlePerPageChange = (e) => {
    const { name, value } = e.target;
    const { itemsPerPage } = this.props;
    this.setState({
      [name]: value,
    });

    itemsPerPage({ per_page: value, page: 1 });
  };

  handleSort = (e) => {
    const { name, value } = e.target;
    const { cities: data, sortData } = this.props;
    this.setState({
      [name]: value,
    });
    sortData({ name, value, data });
  };

  filterCountry = (e) => {
    const { name, value } = e.target;
    const { filterByCountry } = this.props;
    this.setState({
      [name]: value,
    });

    filterByCountry({ name, value });
  };

  componentDidMount() {
    const { getCountries } = this.props;
    getCountries();
  }

  render() {
    const { population, average_income, rows_per_page, country } = this.state;
    const { countries } = this.props;
    console.log(this.state.rows_per_page);
    return (
      <Nav>
        <Div>
          <h2>Countries & Cities list</h2>
        </Div>
        <Div>
          <div>SORT</div>
          <FlexRow>
            <Flex>
              <div>Population</div>

              <Select
                name="population"
                value={population}
                onChange={this.handleSort}
              >
                {["Ascending", "Descending"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </Flex>
            <Flex>
              <div>Average Income</div>
              <Select
                name="average_income"
                value={average_income}
                onChange={this.handleSort}
              >
                {["Ascending", "Descending"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </Flex>
          </FlexRow>
        </Div>

        <Div>
          <div>Items Per Page</div>
          <Select
            name="rows_per_page"
            value={rows_per_page}
            onChange={this.handlePerPageChange}
          >
            {[5, 10, 20, 40, 50].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Div>
        <Div>
          <div>Filter</div>

          <Select name="country" value={country} onChange={this.filterCountry}>
            {countries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Div>
      </Nav>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.city.cities,
  countries: state.country.countries,
});

const mapDispatchToProps = (dispatch) => ({
  getCountries: () => dispatch(getCountries()),
  sortData: (payload) => dispatch(sortData(payload)),
  filterByCountry: (payload) => dispatch(filterByCountry(payload)),
  itemsPerPage: (payload) => dispatch(itemsPerPage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
