import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutAuthor from "./components/AboutAuthor";
// import AboutCourse from "./components/AboutCourse";
// import AboutPlatform from "./components/AboutPlatform";
// import Banner from "./components/Banner";
// import Contacts from "./components/Contacts";
// import FAQs from "./components/FAQs";
// import Feedbacks from "./components/Feedbacks";
// import FormComponent from "./components/FormComponent";
// import Header from "./components/header/Header";
// import HowItWorks from "./components/HowItWorks";
// import PaymentTariff from "./components/PaymentTariff";
// import TrainingInfo from "./components/TrainingInfo";
// import WhyAtomika from "./components/WhyAtomika";
// import WhyChooseAtomika from "./components/WhyChooseAtomika";
// import { Toaster } from "./components/ui/toaster"
// import ThankYouPage from './pages/thank-you';
// import LogoCarousel from './components/LogoCarousel';
// import AboutTeachers from './components/AboutTeachers';
// import Team from './components/Team';

import Header from './components/V2/Header';
import Info from './components/V2/Info/';
import Partners from './components/V2/Partners';
import Features from './components/V2/Features';
import WhyAtomika from './components/V2/WhyAtomika';
import Teachers from './components/V2/Teachers';
import Footer from './components/V2/Footer';
import Process from './components/V2/Process';
import Feedbacks from './components/V2/Feedbacks';
import OurCourses from './components/V2/OurCourses';
import Plans from './components/V2/Plans';
import NationalCert from './components/V2/NationalCert';
import Ready from './components/V2/Ready';
import FAQ from './components/V2/FAQ';
import StudentsResult from './components/V2/StudentsResult';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={ */}
          {/* // <div className="bg-[#FAFAFA]"> */}
          {/* //   <Header /> */}
          {/* //   <main> */}
          {/* //     <Banner /> */}
          {/* //     <LogoCarousel /> */}
          {/* //     <AboutCourse /> */}
          {/* //     <AboutTeachers /> */}
          //     {/* <AboutAuthor /> */}
          {/* //     <WhyAtomika /> */}
          {/* //     <AboutPlatform /> */}
          {/* //     <TrainingInfo /> */}
          {/* //     <HowItWorks /> */}
          {/* //     <WhyChooseAtomika /> */}
          //     {/* <Feedbacks /> */}
          //     {/* <PaymentTariff /> */}
          {/* //     <FAQs /> */}
          {/* //     <FormComponent /> */}
          {/* //     <Team /> */}
          {/* //     <Contacts /> */}
          {/* //   </main> */}
          {/* //   <Toaster /> */}
          {/* // </div> */}
        {/* } /> */}
        {/* <Route path="/thank-you" element={<ThankYouPage />} /> */}
        <Route path='/' element={
          <div>
            <Header/>
            <main className='bg-[#F9FAFB]'>
            <Info/>
            <Features/>  
            <WhyAtomika/>
            <Teachers/>
            <Feedbacks/>
            <StudentsResult/>
            <Process/>
            <OurCourses/>
            <Plans/>
            <NationalCert/>
            <Ready/>
            <FAQ/>
            <Partners/>
            </main>
            <Footer/>
          </div>
        }
       />
      </Routes>
    </Router>
  );
}

export default App;
