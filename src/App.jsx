import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import Committees from "./routes/Committees";
import Leadership from "./routes/Leadership";
import Footer from "./components/Footer";
import Contacts from "./routes/Contacts";
import Congregations from "./routes/Congregations";
import NotFound from "./routes/NotFound";
import Give from "./routes/Give";
import Events from "./routes/Events";
import WomensFellowship from "./routes/WomensFellowship";
import SingingBand from "./routes/SingingBand";
import Choir from "./routes/Choir";
import YPG from "./routes/YPG";
import Presbyters from "./routes/Presbyters";
import Mens from "./routes/Mens";
import YAF from "./routes/YAF";
import BlogDetails from "./routes/BlogDetails";
import News from "./routes/News";
import Groups from "./routes/Groups";
import BibleStudy from "./routes/BibleStudy";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contactus" element={<Contacts />} />
        <Route path="/congregation" element={<Congregations />} />
        <Route path="/give" element={<Give />} />
        <Route path="/events" element={<Events />} />
        <Route path="/womenfellowship" element={<WomensFellowship />} />
        <Route path="/choir" element={<Choir />} />
        <Route path="/ypg" element={<YPG />} />
        <Route path="/presbyters" element={<Presbyters/>}/>
        <Route path="/singingband" element={<SingingBand />} />
        <Route path="/mensfellowship" element={<Mens/>}/>
        <Route path="/yaf" element={<YAF/>}/>
        <Route path="/groups" element={<Groups />} />
        <Route path="/biblestudy" element={<BibleStudy />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog/:id" element={<BlogDetails/>}/>
        <Route path="/news" element={<News/>}/>

      </Routes>
      <Footer />
    </>
  );
};

export default App;
