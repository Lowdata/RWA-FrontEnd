import { http, createConfig } from "@wagmi/core";
import { bsc, bscTestnet } from "@wagmi/core/chains"; // Adding BSC and BSC Testnet
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "4ac563ff2aea29039b9594b470fcde07";

// Config for Binance Smart Chain and its testnet
export const config = createConfig({
  chains: [bscTestnet, bsc],
  connectors: [metaMask(), walletConnect({ projectId }), injected(), safe()],
  transports: {
    [bsc.id]: http("https://rpc.ankr.com/bsc"),
    [bscTestnet.id]: http("https://data-seed-prebsc-1-s1.bnbchain.org:8545"),
  },
  ssr: false,
});
