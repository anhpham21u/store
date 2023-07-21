import Home from "./pages/Home";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ref, child, get } from "firebase/database";
import { database } from "./firebase";
import "./scss/styles.scss";

const ApiContext = createContext();

function App() {
  const [dataProducts, setDataProducts] = useState();

  useEffect(() => {
    const dbRef = ref(database);

    get(child(dbRef, `fish-store/products`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setDataProducts(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ApiContext.Provider value={{ dataProducts, setDataProducts }}>
      <BrowserRouter basename="/store">
        <Routes>
          <Route exact path="/store" element={<Home />} />
          <Route path="/store/products" element={<Products />} />
          <Route path="/store/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ApiContext.Provider>
  );
}

export { ApiContext };
export default App;
