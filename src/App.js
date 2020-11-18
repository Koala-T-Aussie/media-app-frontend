import Routing from './components/routing';
import SearchDisplay from './components/searchDisplay';
import { useSelector } from 'react-redux';

function App() {
  const showSearch = useSelector(state => state.showSearch)

  return (
    <div className="App">
      <Routing>
      </Routing>
      {
        showSearch ?
        <SearchDisplay></SearchDisplay> :
        null
      }
    </div>
  );
}

export default App;
