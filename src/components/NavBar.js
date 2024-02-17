// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/Assets/logo.jpg"; // Import the logo image
import "../styles/NavBar.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const NavBar = () => {
  const config = getDefaultConfig({
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
    chains: [mainnet, polygon, optimism, arbitrum, base, zora],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });
  return (
    <nav className="navbar">
      <div className="navbar-logo">POAP Manager</div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/group-manager" className="nav-link">
            Group Manager
          </Link>
        </li>
      </ul>
      <ul className="navbar-links navbar-links-right">
        <ConnectButton />;
      </ul>
    </nav>
  );
};

export default NavBar;
