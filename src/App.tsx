import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PodcastPlayer from "components/common/podcastPlayerComponents/podcastPlayer/Index";
import HomePage from "pages/home/Home";
import { useSelector } from "react-redux";
import { RootState } from "services/storeRedux/store/Store";
function App() {
  const dataPodcast = useSelector(
    (state: RootState) => state.mediamomentum.podcastData
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/podcasts"
          element={<PodcastPlayer dataPodcast={dataPodcast} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
