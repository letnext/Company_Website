import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Chatbot from "./component/Chatbot";
import Portfolio from "./component/Portfolio";
import Footer from "./component/Footer";
import WebDesigner from "./component/WebDesigner"
import AppDeveloper from "./component/AppDeveloper"
import GraphicDesigner from "./component/GraphicDesigner"
import UiUxDesigner from "./component/UiUxDesigner"
import Testing from "./component/Testing"
import DigitalMarketer from "./component/DigitalMarketer"
import SEOSpecialist from "./component/SEOSpecialist"
import Photographer from "./component/Photographer"
import Videographer from "./component/Videographer"
import ContentCreator from "./component/ContentCreator"
import Iot from "./component/Iot"
import Embbeded from "./component/Embbeded"
import Privacy from "./component/Privacy"
import Terms from "./component/Terms"
import Whatapp from "./component/Whatapp"
import TeamSection from "./component/TeamSection"

import Fullstack from "./component/Fullstack";
import Seo from "./component/seo";
import Datascientist from "./component/Datascientist";
import Cloudengineer from "./component/Cloudengineer";
import Mlengineer from "./component/Mlengineer";
import Uiux from "./component/Uiux";
import Mobile from "./component/Mobile";
import Network from "./component/Network";
import Embedded from "./component/Embedded";
import Blockchain from "./component/Blockchain";
import Excel from "./component/Excel";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (first page) */}
        <Route path="/" element={<Home />} />

        {/* Other routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/webDesigner" element={<WebDesigner />} />
        <Route path="/appDeveloper" element={<AppDeveloper />} />
        <Route path="/graphicDesigner" element={<GraphicDesigner />} />
        <Route path="/uiUxDesigner" element={<UiUxDesigner />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/digitalMarketer" element={<DigitalMarketer />} />
        <Route path="/sEOSpecialist" element={<SEOSpecialist />} />
        <Route path="/photographer" element={<Photographer />} />
        <Route path="/videographer" element={<Videographer />} />
        <Route path="/contentCreator" element={<ContentCreator />} />
        <Route path="/iot" element={<Iot />} />
        <Route path="/embbeded" element={<Embbeded />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/whatapp" element={<Whatapp />} />
        <Route path="/teamSection" element={<TeamSection />} />


        {/* ///////////////////////////////// */}


        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/datascientist" element={<Datascientist />} />
        <Route path="/cloudengineer" element={<Cloudengineer />} />
        <Route path="/mlengineer" element={<Mlengineer />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/network" element={<Network />} />
        <Route path="/embedded" element={<Embedded />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/excel" element={<Excel />} />


      </Routes>
    </Router>
  );
}

export default App;
