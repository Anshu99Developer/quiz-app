import { useState } from "react";
import { AppHeader } from "./components/AppHeader";
import Welcome from "./pages/Welcome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AppHeader />
      <div className="max-w-[800px] w-full mx-auto">
        <Welcome />
      </div>
    </div>
  );
}

export default App;
