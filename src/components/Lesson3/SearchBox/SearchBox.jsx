const SearchBox = ({ filterValue, onChanged }) => {
  return (
    <div>
      <input
        name="search"
        type="text"
        value={filterValue}
        onChange={e => {
          onChanged(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
