import Heading from "./components/Heading";
import FastQinput from "./components/FastQinput";

const App = () => {
  return (
    <div
      className="flex-col bg-gray-200 h-screen 
    bg-[url('https://cdn.pixabay.com/photo/2018/09/05/16/33/dna-3656587_1280.jpg')]
    bg-no-repeat  bg-cover bg-center bg-fixed
    "
    >
      <Heading />
      <FastQinput />
    </div>
  );
};

export default App;
