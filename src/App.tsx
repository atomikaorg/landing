import AboutAuthor from "./components/AboutAuthor";
import AboutCourse from "./components/AboutCourse";
import AboutPlatform from "./components/AboutPlatform";
import Banner from "./components/Banner";
import Header from "./components/header/Header";
import WhyAtomika from "./components/WhyAtomika";

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
      </main>
    </div>
  );
}

export default App;
