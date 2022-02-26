import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Top_Section from "./components/top-section/top-section";
import Who_We_Are from "./components/section-2/who-we-are";
import Our_Expertise from "./components/section-3/our-expertise";
import Projects from "./components/section-4/projects";
import Customers from "./components/section-5/customers";
import Work_Flow from "./components/section-6/work-flow";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <body>
      <Top_Section />
      <Who_We_Are />
      <Our_Expertise />
      <Projects />
      <Customers />
      <Work_Flow />
      <Footer />
    </body>
  );
};

export default App;
