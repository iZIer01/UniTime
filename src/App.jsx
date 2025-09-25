import React from 'react'

import Dashboard from './Components/Dashboard'
import TimeTablerMenu from './Components/TimeTablerMenu'
import Login from './Components/login'
import TimeTablerHeader from './Components/TimeTablerHeader'


export const App = () => {
  return (
    <>
      <TimeTablerHeader/>       
    </>
  )
}
export default App




// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import TimeTablerMenu from './Components/TimeTablerMenu';
// import Login from "./Components/Login";
// import Dashboard from "./Components/Dashboard";

// export const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
