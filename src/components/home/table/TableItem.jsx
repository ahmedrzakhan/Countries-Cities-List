import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCity } from "./../../../redux/cityReducer/actions";
import { TD, TableButton } from "../Styles";
import cStyles from "./../../../styles/common.module.css";

const TableItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteSelectedCity = (id) => {
    dispatch(deleteCity(id));
  };

  const { country, city, population, average_income, id } = item;
  return (
    <tr>
      <TD>{country}</TD>
      <TD>
        <Link to={`/${country}/${city}`} className={cStyles.linkStyle}>
          {city}
        </Link>
      </TD>
      <TD>{population}</TD>
      <TD>{average_income}</TD>
      <TD>
        <TableButton>
          <Link to={`/${country}/${city}/edit`} className={cStyles.editLinkStyle}>
            Edit
          </Link>
        </TableButton>
      </TD>
      <TD>
        <TableButton del onClick={() => deleteSelectedCity(id)}>
          Delete
        </TableButton>
      </TD>
    </tr>
  );
};

export default TableItem;
