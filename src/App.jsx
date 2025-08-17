import Header  from "./components/Header";
import { Outlet } from "react-router-dom";
import appStore from "./utilities/appStore";
import {Provider} from "react-redux";
const App = () => {
  return (<> 
  <Provider store={appStore}>
     <div className="scroll-smooth">
        < Header />
        <Outlet /> 
      </div>
  </Provider>
   </>
  );
};


export default App;
