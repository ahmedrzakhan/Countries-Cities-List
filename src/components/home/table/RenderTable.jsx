import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getCities, pageChange } from "../../../redux/cityReducer/actions";
import TableItem from "./TableItem";

import { Table, TH, PageButton } from "../Styles";

class RenderTable extends Component {
  handlePageChange = (val) => {
    const { rows_per_page, pageChange } = this.props;

    pageChange({ page: val, per_page: rows_per_page });
  };

  componentDidMount() {
    const { getCities } = this.props;
    getCities();
  }

  render() {
    const { filtered: data, cities, rows_per_page } = this.props;
    console.log(rows_per_page);
    const pages = Math.ceil(cities.length / rows_per_page);
    console.log(pages);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Table>
          <tbody key={uuidv4()}>
            <tr>
              <TH>Country</TH>
              <TH>City</TH>
              <TH>Population</TH>
              <TH>Avg Income</TH>
              <TH>Edit</TH>
              <TH>Delete</TH>
            </tr>

            {data.map((item) => (
              <TableItem key={item.id} item={item} />
            ))}
          </tbody>
        </Table>
        <div>
          {new Array(pages).fill(0).map((a, i) => (
            <PageButton
              key={i + 1}
              onClick={() => this.handlePageChange(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.city.cities,
  filtered: state.city.filtered,
  rows_per_page: state.city.rows_per_page,
});

const mapDispatchToProps = (dispatch) => ({
  getCities: () => dispatch(getCities()),
  pageChange: (payload) => dispatch(pageChange(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderTable);
