import { Button, Card, CardContent, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import HackathonIcon from "@mui/icons-material/GroupWork";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // Using vsDark theme

const DevelopSection = () => (
  <section style={styles.section}>
    <Typography variant="h2" style={styles.mainTitle}>
      Develop: Start Coding with RWA
    </Typography>
    <Typography variant="body1" style={styles.paragraph}>
      Whether you&apos;re an experienced blockchain developer or just starting
      out, we provide the tools and resources to build innovative applications
      with RWA (Real World Assets). Let&apos;s get
      coding!
    </Typography>
  </section>
);

const ResourcesSection = () => (
  <Card style={styles.card}>
    <CardContent>
      <Typography variant="h4" style={styles.sectionTitle}>
        Developers&apos; Documentation
      </Typography>
      <Typography variant="body1" style={styles.paragraph}>
        Dive into the technical documentation and learn how to integrate RWA tokens into your dApps. Access smart contracts, API documentation,
        and sample projects.
      </Typography>
      <Button
        variant="contained"
        style={styles.button}
        onClick={() => alert("Launching Soon...")}
      >
        <CodeIcon style={styles.icon} />
        Start Coding
      </Button>
    </CardContent>
  </Card>
);

const SampleCodeSection = () => (
  <Card style={styles.card}>
    <CardContent>
      <Typography variant="h4" style={styles.sectionTitle}>
        Sample Code
      </Typography>
      <Typography variant="body1" style={styles.paragraph}>
        Here&apos;s a sample of how to interact with RWA tokens on Binance Smart
        Chain using Web3.js. This code fetches a balance and transfers tokens.
      </Typography>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers
      >
        {`
        // Import Web3.js
        const Web3 = require('web3');
        const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

        // Token contract addresses
        const RWA_TOKEN_ADDRESS = '0xa4abedf4c304808a137640f2d6cf3342bdd84072';

        // Token ABI (truncated for brevity)
        const TOKEN_ABI = [...];


        // Example: Fetch balance of token holder
        async function getBalance(tokenAddress, account) {
          const tokenContract = new web3.eth.Contract(TOKEN_ABI, tokenAddress);
          const balance = await tokenContract.methods.balanceOf(account).call();
          console.log('Token balance:', balance);
        }

        // Example: Transfer tokens
        async function transferTokens(tokenAddress, fromAddress, toAddress, amount, privateKey) {
          const tokenContract = new web3.eth.Contract(TOKEN_ABI, tokenAddress);
          const tx = tokenContract.methods.transfer(toAddress, amount);
          
          const gas = await tx.estimateGas({ from: fromAddress });
          const data = tx.encodeABI();

          const signedTx = await web3.eth.accounts.signTransaction(
            {
              to: tokenAddress,
              data,
              gas,
            },
            privateKey
          );

          const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
          console.log('Transaction receipt:', receipt);
        }

        // Call the function for testnet
        getBalance(RWA_TOKEN_ADDRESS, '0xYourWalletAddress');
        `}
      </SyntaxHighlighter>
    </CardContent>
  </Card>
);

const InspirationSection = () => (
  <Card style={styles.card}>
    <CardContent>
      <Typography variant="h4" style={styles.sectionTitle}>
        Get Inspired by Existing Projects
      </Typography>
      <Typography variant="body1" style={styles.paragraph}>
        Discover how developers are using and RWA tokens for real-world
        applications. From tokenized real estate to DeFi staking, the
        possibilities are endless.
      </Typography>
      <ul style={styles.list}>
        <li style={styles.listItem}>Real estate tokenization platforms</li>
        <li style={styles.listItem}>Decentralized finance (DeFi) staking</li>
        <li style={styles.listItem}>Cross-border asset transfers</li>
        <li style={styles.listItem}>RWA Investments</li>
        <li style={styles.listItem}>RWA Coins</li>
        <li style={styles.listItem}>RWA Nfts</li>
      </ul>
    </CardContent>
  </Card>
);

const HackathonsSection = () => (
  <Card style={styles.card}>
    <CardContent>
      <Typography variant="h4" style={styles.sectionTitle}>
        Join Hackathons: Connect with Like-Minded Developers
      </Typography>
      <Typography variant="body1" style={styles.paragraph}>
        Become part of a thriving community by joining hackathons. Collaborate
        with like-minded developers to push the boundaries of blockchain
        innovation.
      </Typography>
      <Button
        variant="contained"
        style={styles.button}
        onClick={() => alert("Launching Soon...")}
      >
        <HackathonIcon style={styles.icon} />
        Join a Hackathon
      </Button>
    </CardContent>
  </Card>
);

const DevelopPage = () => (
  <div style={styles.pageContainer}>
    <DevelopSection />
    <ResourcesSection />
    <SampleCodeSection />
    <InspirationSection />
    <HackathonsSection />
  </div>
);

const styles = {
  pageContainer: {
    fontFamily: "'IBM Plex Mono', monospace",
    backgroundColor: "#1c1e22", // Dark background for technical theme
    color: "#fff",
    padding: "0 20px",
    textAlign: "center",
  },
  section: {
    padding: "3rem 0",
  },
  mainTitle: {
    fontSize: "3.2rem",
    fontWeight: "700",
    color: "#F0C419",
    marginBottom: "2rem", // Add more space
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#F0C419",
    marginBottom: "1.5rem",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "2.5rem", // More spacing after paragraph
    maxWidth: "700px", // Limit the width for better readability
    margin: "auto",
  },
  card: {
    backgroundColor: "#2b3038",
    padding: "2.5rem",
    borderRadius: "12px",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",
    marginBottom: "10px",
    maxWidth: "800px",
    margin: "auto",
    marginTop: "10px",
  },
  list: {
    listStyleType: "disc", // Disc bullets
    listStylePosition: "inside",
    padding: "0",
    fontSize: "1.2rem",
    lineHeight: "1.8",
    textAlign: "left",
    maxWidth: "700px",
    margin: "auto",
    marginBottom: "2.5rem", // Space after list
  },
  listItem: {
    marginBottom: "0.7rem", // Space between list items
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    fontWeight: "500",
  },
  codeBlock: {
    backgroundColor: "#333", // Dark background for code block
    color: "#f0f0f0",
    padding: "1rem",
    borderRadius: "8px",
    fontSize: "1rem",
    textAlign: "left",
    overflowX: "auto",
    marginBottom: "2.5rem",
  },
  button: {
    backgroundColor: "#F0C419", // Golden color for buttons
    padding: "1rem 2.5rem",
    fontSize: "1.2rem",
    color: "#1c1e22", // Dark button text
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },
  icon: {
    marginRight: "0.5rem",
  },
};

export default DevelopPage;
