import { Header, Main, Footer } from '../components'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home 
