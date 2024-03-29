
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>

 
  
   
    ,
  </div>
);
