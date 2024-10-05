/* eslint-disable no-unused-vars */
import  { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const PrivateKeyDialog = ({ open, onClose }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleFetchPrivateKey = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://rwa-backend.onrender.com/users/privatekey",
        { rwaId: userId, password }
      );

      if (response.data.privateKey) {
        setPrivateKey(response.data.privateKey);
        navigator.clipboard.writeText(response.data.privateKey);
        alert("Private key copied to clipboard!");
      } else {
        setError("Failed to retrieve private key.");
      }
    } catch (err) {
      setError("Error fetching private key. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Credentials to Fetch Private Key</DialogTitle>
      <DialogContent>
        <TextField
          label="User ID"
          variant="outlined"
          fullWidth
          margin="dense"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="dense"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading && <CircularProgress size={24} style={{ marginTop: 10 }} />}
        {error && (
          <Typography color="error" style={{ marginTop: 10 }}>
            {error}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleFetchPrivateKey}
          color="primary"
          disabled={loading || !userId || !password}
        >
          Fetch Private Key
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivateKeyDialog;
