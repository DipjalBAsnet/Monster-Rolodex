import './SearchBox.css'

const SearchBox = (props) => {
        return(
            <input 
            className={`search-box ${props.className}`}
            type="search" 
            placeholder={props.placeholder}
            onChange={props.onChange}
            />
            )
        }
export default SearchBox;