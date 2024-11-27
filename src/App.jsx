import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainAlbum from "./components/AlbumComponents/MainAlbum";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Tags from "./components/Tags/Tags";
import TagPhotoViwer from "./components/Tags/TagPhotoViwer";
import FaceId from "./components/FaceId";
import Register from "./components/Register";
import UploadPhoto from "./components/UploadPhoto/UploadPhoto";

function App() {
  return (
    <>
      {/* <Header />
      <MainContent />
      <Footer /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/faces" element={<FaceId />} />
          <Route path="/album" element={<MainAlbum />} />
          <Route path="/upload" element={<UploadPhoto />} />
          <Route path="/tagsphotoviewer" element={<TagPhotoViwer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
