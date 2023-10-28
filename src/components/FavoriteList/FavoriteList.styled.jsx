import styled from 'styled-components';

export const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const FavoriteCityName = styled.h2`
  margin: 0;
  font-size: 36px;
`;

export const FavoriteList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;

export const FavoriteItem = styled.li`
  display: flex;
  cursor: pointer;
  width: 250px;
  height: 35px;
  justify-content: space-between;
  padding: 10px;
  border: solid 1px;
  background-color: rgb(255 255 255 / 50%);
  border-radius: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgb(233 146 75 / 60%);
  }
`;

export const FavoriteText = styled.p`
  font-size: 24px;
`;

export const FavoriteBtn = styled.button`
  font-size: 18px;
  background-color: rgb(255 255 255 / 50%);
  padding: 5px;
  border-radius: 10px;
  border-color: #6e4f24;
  color: #6e4f24;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: rgb(255 255 255);
  }
`;
