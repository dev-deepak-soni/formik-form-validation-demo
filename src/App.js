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
        <div className=" w-[25%] md:w-48 h-[670px] overflow-auto scrollbar bg-purple-600 text-white text-sm font-bold">
          <Sidebar/>
        </div>
        <div className="p-2 m-2 w-[100%]  h-[650px]  overflow-auto scrollbar">
          <Outlet/>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default App;
