import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserReferrals } from "../../../store/auth/authAction";
import "../../../styles/referral.css"; // Updated styles

const ReferralPage = () => {
  const dispatch = useDispatch();
  const { userId, referrals, referralsLoading, referralsError } = useSelector(
    (state) => state.auth
  );

  // Fetch referrals when the component mounts
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserReferrals(userId));
    }
  }, [dispatch, userId]);

  const userReferralSummary = referrals?.summary || {
    totalEarnings: "$0.00",
    rank: "No rank",
  };

  return (
    <div className="referral-page-container">
      <h1 className="heading">Referral Earnings and Rank</h1>
      <p className="description">
        Here you can see your referral earnings and the associated rank.
      </p>

      {referralsLoading && <p>Loading referral data...</p>}
      {referralsError && <p>Error loading referrals: {referralsError}</p>}

      {/* Summary Card */}
      <div className="user-referral-card">
        <h2>Your Referral Summary</h2>
        <p>Total Earnings: {userReferralSummary.totalEarnings}</p>
        <p>Rank: {userReferralSummary.rank}</p>
      </div>

      {/* Render table if data is available */}
      {!referralsLoading && referrals?.referrals?.length > 0 && (
        <>
          <h2 className="table-heading">Referral Details</h2>
          <table className="referrals-table">
            <thead>
              <tr>
                <th>Referral ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Level</th>
                <th>Total Earnings</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              {referrals.referrals.map((referral) => (
                <tr key={referral.id}>
                  <td>{referral.referredUserRwaId}</td>
                  <td>{referral.ReferredUser.userName}</td>
                  <td>{referral.ReferredUser.email}</td>
                  <td>{referral.level}</td>
                  <td>{referral.totalEarnings || "$0.00"}</td>
                  <td>{referral.rank || "No rank"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Show message if there are no referrals */}
      {!referralsLoading && referrals?.referrals?.length === 0 && (
        <p>No referrals found for this user.</p>
      )}
    </div>
  );
};

export default ReferralPage;
