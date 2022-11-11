import "../../css/App.css";
import LogIn from "../auth/LogIn";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import fetchInvoices from "../../actions/fetchInvoices";

import SignUp from "../auth/SignUp";
import Dashboard from "../dashboard/Dashboard";
import Invoices from "../dashboard/Invoices";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getInvoices from "../../actions/fetchInvoices";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch invoices on mount
    const getInvoices = async () => {
      const fetchInvoicesData = await fetchInvoices({});
      return fetchInvoicesData;
    };
    
  }, []);

  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invoice" element={<Invoices />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
