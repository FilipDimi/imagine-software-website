import NavigationBar from "./components/UI/NavigationBar";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import JoinUsScreen from "./screens/JoinUsScreen";
import ProjectScreen from "./screens/ProjectScreen";
import TeamScreen from "./screens/TeamScreen";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route index path="/" element={<HomeScreen />} />
        <Route path ="/contact" element={<ContactScreen />} />
        <Route path ="/joinus" element={<JoinUsScreen />} />
        <Route path ="/projects" element={<ProjectScreen />} />
        <Route path ="/team" element={<TeamScreen />} />
        <Route path ="/about" element={<AboutScreen />} />
      </Routes>
    </>
  );
}

export default App;
