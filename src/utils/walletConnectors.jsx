/* eslint-disable react/prop-types */
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Your Reown Cloud project ID
const projectId = "4ac563ff2aea29039b9594b470fcde07";

// 2. Create wagmiConfig
const metadata = {
  name: "RWA",
  description: "AppKit-RWA",
  url: "https://reown.com/appkit",
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

const chains = [
  {
    ...bsc,
    rpcUrls: {
      default: "https://bsc-dataseed.binance.org", // BSC Mainnet
    },
  },
  {
    ...bscTestnet,
    rpcUrls: {
      default: "https://data-seed-prebsc-1-s1.binance.org:8545", // BSC Testnet
    },
  },
];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
try {
  createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true,
    enableOnramp: true,
  });
} catch (error) {
  console.error("Error creating Web3Modal:", error);
}

export function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
