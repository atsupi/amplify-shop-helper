import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator, Button } from "@aws-amplify/ui-react";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <header className="App-header">{user?.username}</header>
          <div className="App">
            <h1>Hello Vite+React</h1>
            <Button onClick={signOut}>SignOut</Button>
          </div>
          <footer className="App-footer">
            <p>Footer</p>
          </footer>
        </>
      )}
    </Authenticator>
  );
}
export default App;
