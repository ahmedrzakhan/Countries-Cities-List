import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCity } from "./../../../redux/cityReducer/actions";
import { Card, CardContainer, Div, H4, H2, Button } from "./Styles";
import cStyles from "./../../../styles/common.module.css";

const CityDetails = () => {
  const params = useParams();
  const cityData = useSelector((state) => state.city.city);
  const dispatch = useDispatch();
  const history = useHistory();
  const { city: currentCity } = params;
  useEffect(() => {
    dispatch(getCity(currentCity));
  }, [dispatch, currentCity]);

  const { city, country, population, average_income, description } =
    cityData[0] || {};

  const goback = () => {
    history.push("/");
  };

  return (
    <>
      <CardContainer>
        <Card>
          <Div center>
            <H2>CITY DETAILS</H2>
          </Div>
          <Div>
            <H4>City&nbsp;:</H4>&nbsp;{city}
          </Div>
          <Div>
            <H4>Country&nbsp;:</H4>
            &nbsp;{country}
          </Div>
          <Div>
            <H4>Population: </H4>
            {population}
          </Div>
          <Div>
            <H4>Average Income: </H4>
            {average_income}
          </Div>
          <Div flexStart>
            <H4>Description&nbsp;:</H4>&nbsp;{description}
          </Div>
          <Div center>
            <Button onClick={goback}>Go Back</Button>
            <Button edit>
              <Link to={`/${country}/${city}/edit`} className={cStyles.editLinkStyle}>Edit</Link>
            </Button>
          </Div>
        </Card>
      </CardContainer>
    </>
  );
};

export default CityDetails;
