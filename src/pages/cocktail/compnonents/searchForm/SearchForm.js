import React from 'react';
import '../../styles/Index.css';
import { useGlobalContext}  from '../../context/Context';
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef();
  React.useEffect(() => {
    searchValue.current.focus();
  });

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  } 

  const handleSubmit = e => {
    e.preventDefault();
  };


  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
      search form
    </section>
  )
}

export default SearchForm;
