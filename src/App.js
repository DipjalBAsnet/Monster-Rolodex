import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/CardList.component";
import SearchBox from "./components/search-box/SearchBox.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className="App">
      <h1 className="app-title"> Monstenpm star Rolodex</h1>

      <SearchBox
        onChange={onSearchChange}
        placeholder="search monsters"
        className="search-monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/*class App extends Component {
  constructor() {
    super();
    this.state = {
     monsters: [],
     searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      this.setState (
        () => {
          return {monsters: users};
        }
        )
      })
    }
    
    onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return {searchField}
      })
    }
    render () {
      const {monsters, searchField} = this.state;
      const {onSearchChange} = this;
      
      const filteredMonsters = monsters.filter(monster => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      })
      return ( 
        <div className="App"> 
        <h1 className='app-title'> Monstor Rolodex</h1>
        
      <SearchBox onChange={onSearchChange} 
      placeholder='search monsters' 
      className='search-monsters'/>
      <CardList monsters={filteredMonsters}/> 
      </div>
    );
  }
  }*/
export default App;
