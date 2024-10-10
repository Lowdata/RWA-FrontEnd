import { HomePage } from "./pages/home";
import Header from "./components/headers";
import Footer from "./components/footer";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import {
  PrivateRouteDashboard,
  PrivateRouteMarketPlace,
} from "./components/privateRoute";
import NFTDetails from "./pages/ProductPage";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPage";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsPage";
import OTPScreen from "./pages/otpScreen";
import SignUp from "./pages/SignUp";
import { Box } from "@mui/material";
import { PrivateRouteAdmin } from "./components/admin/Private";
import AdminDashboard from "./components/admin/Admin";
import NotAuthorized from "./components/Authority.NotAuthorised";
// import AuthDebug from "./components/debug/authDebug";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto-slab/400.css";
import "@fontsource/roboto-slab/700.css";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import PackagesPage from "./pages/Packages";
import LearnMore from "./pages/LearnMore";
import DevelopPage from "./pages/develop";
import ParticipateSection from "./pages/Participate";
import { Web3ModalProvider } from "./utils/walletConnectors";
import RWAInvestment from "./pages/RwaInvestment";
import RWANFTPackage from "./pages/RwaNft"
import RWATokenPage from "./pages/RwaCoins"
import { gapi } from "gapi-script";
import { useEffect } from "react";
import StableTokenPage from "./pages/RwaStableToken";


const App = () => {
 
    const clientId =
      "1020245847291-dkcn1ibl4e2nq3bu2po7m6dtlq19kc4f.apps.googleusercontent.com";
      useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId:clientId,
                scope:""
            })
        };
        gapi.load('client:auth2', start);
      })
  return (
    <Web3ModalProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh" /* Fix height for footer stick */,
          overflow: "hidden",
        }}
      >
        <Header />
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/dashboard"
              element={<PrivateRouteDashboard element={Dashboard} />}
            />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route
              path="/admin"
              element={<PrivateRouteAdmin element={AdminDashboard} />}
            />
            <Route
              path="/nft/:id"
              element={<PrivateRouteMarketPlace element={NFTDetails} />}
            />
            <Route path="/rwa-investment" element={<RWAInvestment />} />
            <Route path="/rwa-nft" element={<RWANFTPackage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/package" element={<PackagesPage />} />
            <Route path="/coins" element={<RWATokenPage />} />
            <Route path="/stable" element={<StableTokenPage />} />
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="/develop" element={<DevelopPage />} />
            <Route path="/participate" element={<ParticipateSection />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/otp-screen" element={<OTPScreen />} />
            <Route path="/not-authorised" element={<NotAuthorized />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Web3ModalProvider>
  );
};

export default App;
