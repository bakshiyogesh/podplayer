import { BrowserRouter, Route,Routes} from "react-router-dom";
import Podcastplayer from "../components/common/PodcastPlayer/PodcastPlayer";
import Homepage from "../pages/homepage/homepage";
import { useSelector } from "react-redux";
import { RootState } from "../services/redux/store/store";
function Routing() {
    const dataPodcast=useSelector((state:RootState)=>state.podcast.podcastData);
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/podcasts" element={<Podcastplayer  dataPodcast={dataPodcast}/>}/>
          {/* <Route path="*" element={<ErrorPage/>}/> */}
        </Routes>
      </BrowserRouter>
    );
  }
  export default Routing;