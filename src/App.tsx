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

function App() {
  return (
    <div className="bg-[#f3f3f3] min-h-screen pb-6">
      <Header />
      <main>
        <Banner />
        <AboutCourse />
        <AboutAuthor />
        <WhyAtomika />
        <AboutPlatform />
        <TrainingInfo />
        <HowItWorks />
        <WhyChooseAtomika />
        <Feedbacks />
        <PaymentTariff />
        <FAQs />
        <FormComponent />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
