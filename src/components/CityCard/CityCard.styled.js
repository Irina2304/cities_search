import styled from 'styled-components';

export const CityCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const CityName = styled.h1`
  font-size: 54px;
`;

export const CityList = styled.ul`
  display: flex;
  width: 80%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CityItem = styled.li`
  /* font-size: 24px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: rgb(255 255 255 / 30%);
  padding: 15px;
  border-radius: 15px;
  width: calc((100% - 10px) / 5);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgb(233 146 75 / 60%);
    transform: scale(1.2);
  }
`;

export const CityText = styled.p`
  font-size: 24px;
`;

export const CityBtn = styled.button`
  font-size: 24px;
  background-color: rgb(255 255 255 / 50%);
  padding: 15px;
  border: solid 1px;
  border-radius: 10px;
  border-color: #6e4f24;
  color: #6e4f24;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: rgb(233 146 75 / 60%);
  }
`;
