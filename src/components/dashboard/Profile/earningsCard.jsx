/* eslint-disable react/prop-types */
import { Card, Typography } from "@mui/material";

const EarningsCard = ({
  totalEarnings,
  referralEarnings,
  matrixEarnings,
  revenueEarnings,
  leadershipEarnings,
  dailyEarnings,
  directRoyaltyEarnings,
  styles,
}) => {
  return (
    <Card style={styles.netWorthCard}>
      <Typography variant="h5" style={styles.balance}>
        Total Earnings: ${totalEarnings}
      </Typography>
      <Typography>Referral Earnings: ${referralEarnings}</Typography>
      <Typography>Matrix Earnings: ${matrixEarnings}</Typography>
      <Typography>Revenue Earnings: ${revenueEarnings}</Typography>
      <Typography>Leadership Earnings: ${leadershipEarnings}</Typography>
      <Typography>Daily Earnings: ${dailyEarnings}</Typography>
      <Typography>Direct Royalty Earnings: ${directRoyaltyEarnings}</Typography>
    </Card>
  );
};

export default EarningsCard;
