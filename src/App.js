import "./App.css";
import Header1 from "./Components/header1.jsx";
import OutlinedButtons from "./Components/Menubar.jsx";
import EnglishTranscript from "./Components/EnglishTranscript.jsx";
import Footer from "./Components/footer.jsx";
import Payment from "./Components/Payment.jsx";
import RegistrationCard from "./Components/RegistrationCard.jsx";
import ExamSchedule from "./Components/ExamSchedule.jsx";
import Payment2 from "./Components/Payment2.jsx";
import AlumniForm from "./Components/AlumniForm.jsx";
function App() {
  return (
    <div className="App">
      <Header1 />
      <OutlinedButtons />
      <EnglishTranscript />
      <Footer />
    </div>
  );
}

export default App;
