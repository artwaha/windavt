import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Dashboard from "./component/Dashboard"
import Users from './component/users/Users'
import Graphs from './component/graphs/Graphs'
import Summaries from './component/summaries/Summaries'
import Workspace from './component/workspace/Workspace'
import History from './component/history/History'
import Details from './component/users/Details'
import Edit from './component/users/Edit'
import UserTabs from './component/users/UserTabs'
import UserAdd from './component/users/UserAdd';
// Edit


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <App /> */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="user" element={<UserTabs />} >
            <Route index element={< Details />} />
            <Route path="edit" element={< Edit />} />
          </Route>
          <Route path="add" element={<UserAdd />} />
          <Route path="graphs" element={<Graphs />} />
          <Route path="summaries" element={<Summaries />} />
          <Route path="workspace" element={<Workspace />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
