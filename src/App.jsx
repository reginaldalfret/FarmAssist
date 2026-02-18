import React from "react";
import Routes from "./Routes";
import VoiceAssistant from "./components/VoiceAssistant";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <>
        <Routes />
        <VoiceAssistant />
      </>
    </LanguageProvider>
  );
}

export default App;
