import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  color: #000;
  margin-top: 100px;
  padding: 25px 40px 25px 40px;
  box-shadow: 10px 10px #bababb;
  border: 1px solid #bababb;
  width: 40%;
`;

export const Div = styled.div`
  display: flex;
  align-items: ${(props) => (props.flexStart ? "flex-start" : "center")};
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  letter-spacing: 0.5px;
`;

export const H4 = styled.h4`
  color: #3783be;
  margin: 10px;
`;

export const H2 = styled.h2`
  color: #222;
  margin: 10px;
`;

export const Button = styled.button`
  margin: 20px 20px 20px 0px;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  background: ${(props) => (props.edit ? "#008b02" : "#37567d")};
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px;
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px;
`;
