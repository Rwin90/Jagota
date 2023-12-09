import cntl from "cntl";
import { Navbar } from "./components/Navbar/Navbar";
import { Report } from "./pages/Report/Report";

const classes = {
  continer: cntl`
  pt-12 w-full h-full
  `,
};
function App() {
  return (
    <div className={classes.continer}>
      <Navbar />
      <Report />
    </div>
  );
}

export default App;
