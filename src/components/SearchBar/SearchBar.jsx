import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = ({ getCity }) => {
  const onSubmit = evt => {
    evt.preventDefault();
    const city = evt.currentTarget.elements.input.value;
    getCity(city);
  };
  return (
    <Search className="searchbar">
      <SearchForm onSubmit={onSubmit} className="form">
        <SearchFormButton type="submit" className="button">
          <span className="button-label">
            {' '}
            <FaSearch />
          </span>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search cities"
        />
      </SearchForm>
    </Search>
  );
};
