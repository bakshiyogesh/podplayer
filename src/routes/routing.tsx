import { BrowserRouter, Route,Routes} from "react-router-dom";
import Podcastplayer from "../components/common/podcastPlayerComp/podcastPlayer/Index";
import Homepage from "../pages/homePage/HomePage";
import { useSelector } from "react-redux";
import { RootState } from "../services/redux/store/Store";
function Routing() {
    const dataPodcast=useSelector((state:RootState)=>state.podcast.podcastData);
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/podcasts" element={<Podcastplayer  dataPodcast={dataPodcast}/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  export default Routing;