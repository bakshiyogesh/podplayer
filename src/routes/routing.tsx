import { BrowserRouter, Route,Routes} from "react-router-dom";
import PodcastPlayer from "@components/common/podcastPlayerComp/podcastPlayer/Index";
import HomePage from "@/pages/homePage/HomePage";
import { useSelector } from "react-redux";
import { RootState } from "@/services/storeRedux/store/Store";
function Routing() {
    const dataPodcast=useSelector((state:RootState)=>state.podcast.podcastData);
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/podcasts" element={<PodcastPlayer  dataPodcast={dataPodcast}/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  export default Routing;