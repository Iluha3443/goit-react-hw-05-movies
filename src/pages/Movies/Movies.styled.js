import styled from 'styled-components';

export const ItemParent = styled.div`
display:flex;
justify-content: center
`
export const Form = styled.form`
  padding: 15px;
  border: 1px solid orange;
  border-radius: 10px;
`
export const InputSearch = styled.input`
 padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: orange;
  }
`
export const ButtonSearch = styled.button`
   padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-left: 7px;

  &:hover {
    background-color: #0056b3;
  }
`

export const ListMoviesBest = styled.ul`
  list-style: none;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
`

export const ListMoviesChildren = styled.li`
margin-bottom: 10px;
font-size:20px;
`
