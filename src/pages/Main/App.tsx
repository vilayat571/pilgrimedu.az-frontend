import Aboutus from "../../components/Main/Aboutus";
import Results from "../../components/Main/Results";
import Layout from "../../layout/Layout";
import Cover from "../../atoms/Main/Cover";

function App() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center xl:w-3/5 lg:w-full md:w-full sm:w-full">
        <Cover />
        <Aboutus />
        <Results />
      </div>
    </Layout>
  );
}

export default App;
