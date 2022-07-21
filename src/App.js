import { useState } from 'react';
import { createContext } from 'react';
import './App.css';
import LayoutWrapper from './component/LayoutWrapper';
import { data } from "./component/users/userdata";


export const initialState = {
  selected: false,
  selectedRow: {}
}
export const SelectedRowContext = createContext()
export const DataSourceContext = createContext()

function App() {
  const [selectedRow, setSelectedRow] = useState(initialState)
  const [dataSource, setDataSource] = useState(data)

  return (
    <DataSourceContext.Provider value={{ dataSource, setDataSource }}>
      <SelectedRowContext.Provider value={{ selectedRow, setSelectedRow }}>
        <div className="App">
          <LayoutWrapper />
        </div>
      </SelectedRowContext.Provider>
    </DataSourceContext.Provider>
  );
}

export default App;
