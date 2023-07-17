import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchHeader,
} from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export const Searchbar = ({ text, counter, id, onDelete }) => {
  return (
    <SearchHeader>
      <SearchForm>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>
            <FiSearch size="16px" />
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchHeader>
  );
};
