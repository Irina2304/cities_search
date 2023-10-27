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
  font-size: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: rgb(255 255 255 / 30%);
  padding: 15px;
  border-radius: 15px;
  width: calc((100% - 10px) / 5);
`;

export const CityText = styled.p`
  font-size: 36px;
`;
