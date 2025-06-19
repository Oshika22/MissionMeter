import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BudgetProvider } from './context/BudgetContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardRevealGrid from './components/CardRevealGrid';
import Dashboard from './pages/Dashboard';
import Predictor from './components/Predictor';
import PredictReport from './pages/PredictReport';
import ChatBot from './components/ChatBot';
import RatingComponent from './components/Rating';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-200">

        <Navbar />


        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <CardRevealGrid />
                  <Dashboard />
                  <RatingComponent/>
                </>
              }
            />
            <Route path="/predictor" element={<PredictReport />} />
            <Route path="/Chatbot" element={<ChatBot />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  
  );
}

export default App;
