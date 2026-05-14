import { useCallback, useRef, useState } from 'react';
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
import Modal from './components/V2/Modal';
import { Toaster } from './components/ui/toaster';
import ThankYouPage from './pages/thank-you';
import { NationalCertificate } from './pages/NationatCertificate';

function App() {
  const [modalSource, setModalSource] = useState<string | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOpenMode, setModalOpenMode] = useState<'button' | 'scroll'>('button');
  const [autoOpenedSections, setAutoOpenedSections] = useState<Record<string, boolean>>({});
  const modalOpenFrameRef = useRef<number | null>(null);
  const modalOpenTimeoutRef = useRef<number | null>(null);

  const clearPendingModalOpen = useCallback(() => {
    if (modalOpenFrameRef.current) {
      window.cancelAnimationFrame(modalOpenFrameRef.current);
      modalOpenFrameRef.current = null;
    }

    if (modalOpenTimeoutRef.current) {
      window.clearTimeout(modalOpenTimeoutRef.current);
      modalOpenTimeoutRef.current = null;
    }
  }, []);

  const scheduleModalOpen = useCallback((source: string, mode: 'button' | 'scroll') => {
    setModalSource(source);
    setModalOpenMode(mode);

    clearPendingModalOpen();

    window.requestAnimationFrame(() => {
      modalOpenFrameRef.current = window.requestAnimationFrame(() => {
        setIsModalOpen(true);
        modalOpenFrameRef.current = null;
      });
    });
  }, [clearPendingModalOpen]);

  const openModal = useCallback((source: string) => {
    scheduleModalOpen(source, 'button');
  }, [scheduleModalOpen]);

  const closeModal = useCallback(() => {
    clearPendingModalOpen();
    setIsModalOpen(false);
  }, [clearPendingModalOpen]);

  const openModalOnce = useCallback((source: string) => {
    setAutoOpenedSections((previous) => {
      if (previous[source]) {
        return previous;
      }

      clearPendingModalOpen();
      modalOpenTimeoutRef.current = window.setTimeout(() => {
        scheduleModalOpen(source, 'scroll');
        modalOpenTimeoutRef.current = null;
      }, 2000);

      return {
        ...previous,
        [source]: true,
      };
    });
  }, [clearPendingModalOpen, scheduleModalOpen]);

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
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/national-certificate"  element={<NationalCertificate />}/>
        <Route path='/' element={
          <div>
            <Header onOpenModal={() => openModal('header-cta')} />
            <main className='bg-[#F9FAFB]'>
            <Info onOpenModal={() => openModal('info-cta')}/>
            <StudentsResult/>
            <Feedbacks/>
            <Teachers/>
            <Features/>  
            {/* <WhyAtomika/> */}
            {/* <Process  /> */}
            {/* <OurCourses onAutoOpen={() => openModalOnce('students-result-scroll')}/> */}
            <Plans onOpenModal={() => openModal('plans-cta')}
              onAutoOpen={() => openModalOnce('students-result-scroll')}
              />
            <NationalCert onOpenModal={() => openModal('national-cert-cta')}/>
            <Ready onOpenModal={() => openModal('ready-button')}/>
            <FAQ/>
            <Partners/>
            </main>
            <Footer/>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              source={modalSource}
              openMode={modalOpenMode}
            />
            <Toaster />
          </div>
        }
       />
      </Routes>
    </Router>
  );
}

export default App;
