import "./App.css";
import Header1 from "./Components/header1.jsx";
import OutlinedButtons from "./Components/Menubar.jsx";
import { Route, Switch } from "react-router-dom";
import EnglishTranscript from "./Components/EnglishTranscript.jsx";
import Footer from "./Components/footer.jsx";
import Payment from "./Components/Payment.jsx";
import RegistrationCard from "./Components/RegistrationCard.jsx";
import ExamSchedule from "./Components/ExamSchedule.jsx";
import Payment2 from "./Components/Payment2.jsx";
import AlumniForm from "./Components/AlumniForm.jsx";
import Transcript from "./Components/Transcript(UK)";
import Lectures from "./Components/Lectures";
function App() {
  return (
    <div className="App">
      <Header1 />
      <OutlinedButtons />
      <Switch>
        <Route exact path="/" component={EnglishTranscript} />
        <Route path="/T" component={Transcript} />
        <Route path="/RC" component={RegistrationCard} />
        <Route path="/ES" component={ExamSchedule} />
        <Route path="/AF" component={AlumniForm} />
        <Route path="/PM" component={Payment} />
        <Route path="/P2" component={Payment2} />
        <Route path="/L" component={Lectures} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
