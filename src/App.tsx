import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator, Button } from "@aws-amplify/ui-react";
import HomeBar from "./HomeBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Register from "./Register";
import PurchaseList from "./PurchaseList";
import Detail from "./Detail";

function App() {

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <div className="App">
            <header className="App-header">
              <h2>{user?.username}</h2>
              <Button onClick={signOut}>SignOut</Button>
            </header>
            <main className="Main">
              <BrowserRouter>
                <HomeBar />
                <div className="MainContent">
                  <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route
                      path="/register"
                      element={<Register username={user?.username} />}
                    />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart username={user?.username}/>} />
                    <Route path="/purchase" element={<PurchaseList />} />
                    <Route path="/detail/:id" element={<Detail />} />
                  </Routes>
                </div>
              </BrowserRouter>
            </main>
            <footer className="App-footer">
            </footer>
          </div>
        </>
      )}
    </Authenticator>
  );
}
export default App;
