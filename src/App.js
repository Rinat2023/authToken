import { Routes, Route } from 'react-router-dom';
import { Home } from './components/HomePage';
import React from 'react';
import { Registration } from './components/registration';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Registration></Registration>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}
export default App;

// const App = () => {
//   const [user, setUser] = useState(null);

//   const handleLogin = () =>
//     setUser({
//       id: '1',
//       name: 'robin',
//       permissions: ['analyze'],
//       roles: ['admin'],
//     });
//   const handleLogout = () => setUser(null);

//   return (
//     <>
//       <h1>React Router</h1>

//       <Navigation />
//       {user ? (
//         <button onClick={handleLogout}>Sign Out</button>
//       ) : (
//         <button onClick={handleLogin}>Sign In</button>
//       )}

//       <Routes>
//         <Route index element={<Landing />} />
//         <Route path="landing" element={<Landing />} />

//         <Route element={<ProtectedRoute isAllowed={user} />}>
//           <Route path="home" element={<Home />} />
//           <Route path="dashboard" element={<Dashboard />} />
//         </Route>

//         <Route path="analytics" element={<Analytics />} />
//         <Route path="admin" element={<Admin />} />
//       </Routes>
//     </>
//   );
// };

// const Navigation = () => (
//   <nav>
//     <Link to="/landing">Landing</Link>
//     <Link to="/home">Home</Link>
//     <Link to="/dashboard">Dashboard</Link>
//     <Link to="/analytics">Analytics</Link>
//     <Link to="/admin">Admin</Link>
//   </nav>
// );

// const Landing = () => {
//   return <h2>Landing (Public: anyone can access this page)</h2>;
// };

// const Dashboard = () => {
//   return <h2>Dashboard (Protected: authenticated user required)</h2>;
// };

// const Analytics = () => {
//   return (
//     <h2>
//       Analytics (Protected: authenticated user with permission 'analyze'
//       required)
//     </h2>
//   );
// };

// const Admin = () => {
//   return (
//     <h2>Admin (Protected: authenticated user with role 'admin' required)</h2>
//   );
// };

// export default App;
