import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 40px 20px 40px;
  align-items: center;
`;

export const Center = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  border-radius: 4px;
  background: #e9e9e9;
  padding: 20px;
  box-shadow: 2px 2px #ccc;
  height: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  margin: 8px;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  border: none;
`;

export const Button = styled.button`
  padding: 10px 30px 10px 30px;
  background: #01579b;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  margin: 10px;
  width: 50%;
  color: #fff;
`;

export const Top = styled.div`
  margin-top: 25px;
`;
export const Select = styled.select`
  padding: 5px;
  background: #01579b;
  color: #fff;
  font-weight: 600;
  outline: none;
  border: none;
  margin: 0 15px 0 15px;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TH = styled.th`
  padding: 20px 30px 20px 30px;
  text-align: center;
  border: 1px solid #ddd;
  background: #3783be;
  color: white;
`;

export const TD = styled.td`
  border: 1px solid #ddd;
  padding: 15px 20px 15px 20px;
  text-align: center;
`;

export const TableButton = styled.button`
  padding: 10px 24px 10px 24px;
  border: none;
  border-radius: 4px;
  background: ${(props) => (props.del ? "#b80000" : "#008b02")};
  color: #fff;
  font-weight: 600;
`;

export const PageButton = styled.button`
  padding: 10px 15px 10px 15px;
  margin: 10px;
  border-radius: 50%;
  background: #3783be;
  color: #fff;
  border: none;
`;
