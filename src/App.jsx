import React from "react";
import Background from "./components/background"
import Foreground from "./components/forground";


function App (){
  return(
    <div className="relative w-full h-screen bg-zinc-900/90">
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App;