import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<AllMeetups />}> </Route>
            <Route path="/new-meetup" element={<NewMeetup />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
    </Layout>
  );
}

export default App;
