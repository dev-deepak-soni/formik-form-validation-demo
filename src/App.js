import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <>
      <div>
      <Header />
      <div className="w-full flex">
        <div className=" w-1/3 md:w-48 p-2 m-2  h-[650px] overflow-auto scrollbar">
          <Sidebar/>
        </div>
        <div className="p-2 m-2 w-2/3  h-[650px]  overflow-auto scrollbar">
          <Outlet/>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default App;
