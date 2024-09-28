

const AboutUs = () => {
  const styles = {
    container: {
      backgroundColor: "#203C5E", // Dark background similar to the Participate section
      color: "#FFFFFF", // White text for readability
      padding: "4rem 2rem",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    header: {
      fontSize: "2.8rem", // Adjusted font size to be consistent with the Participate section
      fontWeight: "600",
      color: "#F0C419", // Gold color for the header
      marginBottom: "2.5rem",
    },
    section: {
      marginBottom: "3rem",
      padding: "2.5rem",
      backgroundColor: "#1A2F45", // Darker section background
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)", // Similar shadow effect
      borderRadius: "12px",
      maxWidth: "800px",
      margin: "10px auto",
    },
    title: {
      fontSize: "2.2rem",
      fontWeight: "600",
      color: "#F0C419", 
      marginBottom: "1rem",
    },
    text: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      color: "#FFFFFF",
     
    },
    list: {
      listStyleType: "none",
      padding: 0,
      fontSize: "1.2rem",
      lineHeight: "1.8",
      marginTop: "1rem",
      marginBottom: "1rem",
      textAlign: "left",
      paddingLeft: "1.5rem",
      color: "#F0C419", // Gold bullet points
    },
    bullet: {
      marginRight: "0.5rem",
      color: "#F0C419",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>About Real World Asset Corp</div>

      <div style={styles.section}>
        <h2 style={styles.title}>Who We Are</h2>
        <p style={styles.text}>
          Welcome to <strong>Real World Asset Corp</strong>, the leader in
          bridging the gap between real-world assets and the dynamic world of
          blockchain technology. Our platform revolutionizes global investments
          by offering a diverse range of opportunities across Real World Asset
          Tokens (RWATOKEN), stablecoins, NFTs, and innovative business
          partnerships. We empower individuals and organizations to seamlessly
          integrate into the global asset market, enhancing transparency,
          security, and profitability.
        </p>
        <p style={styles.text}>
          At Real World Asset Corp, we operate across four core sectors:
          Investment, NFTs, Coin Launch, and Stable Tokens.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is simple: to democratize access to real-world assets. By
          utilizing the power of blockchain technology, we open doors for
          investors to diversify their portfolios, secure steady returns, and
          access global asset markets with unparalleled security and
          transparency.
        </p>
        <p style={styles.text}>
          Blockchain technology allows us to transform traditional investment
          avenues, such as real estate, commodities, and intellectual property,
          into tokenized digital assets. This shift provides investors with the
          opportunity to own fractional shares of tangible assets, empowering
          them with liquidity and accessibility like never before.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>Our Vision</h2>
        <p style={styles.text}>
          We envision a future where the investment world becomes fully
          inclusive, transparent, and accessible. Through our blockchain-powered
          platform, we aim to simplify the process of investing in real-world
          assets, allowing people from all backgrounds to secure their financial
          future while benefiting from the immense potential of the blockchain
          revolution.
        </p>
        <p style={styles.text}>
          Real World Asset Corp is committed to advancing the technology that
          drives our vision of a decentralized and inclusive financial world.
          Our long-term vision includes not only facilitating investments but
          also reshaping how assets are owned and traded globally.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>What We Offer</h2>
        <p style={styles.text}>
          <strong>RWATOKEN:</strong> A digital token representing real-world
          assets such as real estate, commodities, and intellectual property,
          allowing fractional ownership and liquidity.
        </p>
        <p style={styles.text}>
          <strong>Stable Tokens:</strong> Secure digital investments backed by
          real-world assets like USD, ensuring stable value and offering
          flexible lock-in periods and competitive revenue sharing.
        </p>
        <p style={styles.text}>
          <strong>NFTs:</strong> Unique digital ownership of assets such as art,
          fashion, property, and intellectual property rights, with verifiable
          ownership secured on the blockchain.
        </p>
        <p style={styles.text}>
          <strong>Business Partnerships:</strong> Real World Asset Corp provides
          opportunities for businesses to collaborate on joint ventures within
          our ecosystem.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>
          Detailed Breakdown of Our Investment Sectors
        </h2>
        <p style={styles.text}>
          At Real World Asset Corp, our investment platform offers unparalleled
          access to a diverse set of assets:
        </p>
        <h3 style={styles.title}>Real Estate Investment</h3>
        <p style={styles.text}>
          We enable fractional ownership of residential, commercial, and
          industrial properties through RWATOKEN. The real estate market offers
          investors steady returns through rental income, capital appreciation,
          and portfolio diversification.
        </p>

        <h3 style={styles.title}>Commodities Investment</h3>
        <p style={styles.text}>
          Investing in precious and industrial metals, energy resources, and
          agricultural products allows investors to hedge against inflation
          while participating in high-liquidity markets.
        </p>

        <h3 style={styles.title}>Intellectual Property Investment</h3>
        <p style={styles.text}>
          We offer investors opportunities to own and monetize intellectual
          property rights. Through RWATOKEN, you can invest in patents,
          trademarks, and copyrights.
        </p>

        <h3 style={styles.title}>NFTs in Fashion and Art</h3>
        <p style={styles.text}>
          Real World Asset Corp is at the forefront of the digital
          transformation of the fashion and art industries. We tokenize designer
          fashion collections, allowing individuals to own a share of exclusive
          fashion items or fine art collections.
        </p>

        <h3 style={styles.title}>Green Renewable Energy</h3>
        <p style={styles.text}>
          We support investments in renewable energy projects through our stable
          tokens and RWATOKEN, focusing on sustainable infrastructure such as
          solar, wind, and hydropower plants.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>Technology That Drives Us</h2>
        <p style={styles.text}>
          We leverage smart contracts on decentralized blockchain networks to
          ensure that every transaction is secure, transparent, and immutable.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>Business Partnerships and Future Growth</h2>
        <p style={styles.text}>
          We are actively building a community of forward-thinking partners who
          wish to collaborate on future-oriented projects.
        </p>
        <p style={styles.text}>
          Real World Asset Corp is dedicated to expanding the use of blockchain
          technology to unlock new opportunities across sectors like healthcare,
          logistics, and telecommunications.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
