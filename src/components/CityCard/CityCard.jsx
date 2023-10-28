import {
  CityCardContainer,
  CityName,
  CityList,
  CityItem,
  CityText,
  CityBtn,
} from './CityCard.styled.js';

export const CityCard = ({ cityData, onAddCity }) => {
  const { name, country, population, latitude, longitude, id } = cityData;

  const onAddClick = () => {
    onAddCity(cityData);
  };

  return (
    <CityCardContainer className="CityCard">
      <CityName className="CityName">{name}</CityName>
      <CityList className="CityList">
        <CityItem className="CityItem">
          <CityText className="CityText">country:</CityText>
          <CityText className="CityText">{country}</CityText>
        </CityItem>
        <CityItem className="CityItem">
          <CityText className="CityText">population:</CityText>
          <CityText className="CityText">{population}&nbsp;people</CityText>
        </CityItem>
        <CityItem className="CityItem">
          <CityText className="CityText">latitude:</CityText>
          <CityText className="CityText">{latitude}&#176;</CityText>
        </CityItem>
        <CityItem className="CityItem">
          <CityText className="CityText">longitude:</CityText>
          <CityText className="CityText">{longitude}&#176;</CityText>
        </CityItem>
      </CityList>
      <CityBtn type="button" name={id} onClick={onAddClick}>
        Add to favorite list
      </CityBtn>
    </CityCardContainer>
  );
};
