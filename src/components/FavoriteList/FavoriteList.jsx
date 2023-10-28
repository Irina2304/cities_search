import {
  FavoriteContainer,
  FavoriteCityName,
  FavoriteList,
  FavoriteItem,
  FavoriteText,
  FavoriteBtn,
} from './FavoriteList.styled';

export const FavoritList = ({ cityList, onDelCity, onShowCity }) => {
  const onDelClick = evt => {
    onDelCity(evt.currentTarget.name);
  };

  const onShowClick = evt => {
    const id = evt.target.id || evt.target.parentNode.getAttribute('id');
    onShowCity(id);
  };

  return (
    <FavoriteContainer className="CitiesList">
      <FavoriteCityName>My favorite cities</FavoriteCityName>
      <FavoriteList className="CitiesList" onClick={onShowClick}>
        {cityList.map(city => (
          <FavoriteItem key={city.id} id={city.id}>
            <FavoriteText>{city.name}</FavoriteText>
            <FavoriteBtn type="button" name={city.name} onClick={onDelClick}>
              Delete
            </FavoriteBtn>
          </FavoriteItem>
        ))}
      </FavoriteList>
    </FavoriteContainer>
  );
};
