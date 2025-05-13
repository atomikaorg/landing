import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutAuthor from "./components/AboutAuthor";
import AboutCourse from "./components/AboutCourse";
import AboutPlatform from "./components/AboutPlatform";
import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import FAQs from "./components/FAQs";
import Feedbacks from "./components/Feedbacks";
import FormComponent from "./components/FormComponent";
import Header from "./components/header/Header";
import HowItWorks from "./components/HowItWorks";
import PaymentTariff from "./components/PaymentTariff";
import TrainingInfo from "./components/TrainingInfo";
import WhyAtomika from "./components/WhyAtomika";
import WhyChooseAtomika from "./components/WhyChooseAtomika";
import { Toaster } from "./components/ui/toaster"
import ThankYouPage from './pages/thank-you';
import LogoCarousel from './components/LogoCarousel';
import AboutTeachers from './components/AboutTeachers';
import Team from './components/Team';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="bg-[#FAFAFA]">
            <Header />
            <main>
              <Banner />
              <LogoCarousel />
              <AboutCourse />
              <AboutTeachers />
              {/* <AboutAuthor /> */}
              <WhyAtomika />
              <AboutPlatform />
              <TrainingInfo />
              <HowItWorks />
              <WhyChooseAtomika />
              {/* <Feedbacks /> */}
              <PaymentTariff />
              <FAQs />
              <FormComponent />
              <Team />
              <Contacts />
            </main>
            <Toaster />
          </div>
        } />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
