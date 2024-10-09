import  { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Card,
  CardContent,
  CardActions,
  createTheme,
    ThemeProvider,
    Alert
} from "@mui/material";
import { user } from "../store/auth/authAction"; 
import { useDispatch, useSelector } from "react-redux";
import { registerBusinessPartner,submitProduct } from "../store/businessSlice";
import LoadingSpinner from "../components/loading/Loading";
const BusinessPage = () => {
    const dispatch = useDispatch();
 const { businessRegistrationStatus, productSubmissionStatus, loading, error } =
   useSelector((state) => state.business);
   const {userId} = useSelector((state)=>state.auth)
   const userEmail = useSelector((state)=>state.auth.email)
    const theme = createTheme({
      palette: {
        primary: {
          main: "#CBA135", // Softer gold
        },
        background: {
          default: "#1C1C1E", // Dark background for the content
        },
        text: {
          primary: "#F5E6C5", // Softer gold text
          secondary: "#E0E0E0", // Default text color
        },
        secondary: {
          main: "#DC3545", // Red for reject button
        },
      },
    });


  const approval = user.approval;
  const email = userEmail;
  const sourcingPartner = user.referrerRwaId || "RWA7620";
  const RWAID = userId;

  // Pre-populate form with user data for Business Partner Registration
  const [businessFormData, setBusinessFormData] = useState({
    rwaId: RWAID || "",
    companyName: "",
    category: "",
    description: "",
    address: "",
    phone: "",
    email: email || "",
    sourcingPartnerCode: sourcingPartner || "",
  });

  // Form data for Product Submission (if user is already approved)
  const [productFormData, setProductFormData] = useState({
    rwaId: RWAID || "",
    productName: "",
    category: "",
    description: "",
    image: null,
    video: null,
    saleAmount: 0,
    proofOfOwnership: "",
    termsAccepted: false,
  });

  const [submittedProjects, setSubmittedProjects] = useState([]);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(""); // New state for handling server errors

  useEffect(() => {
    // Fetch already submitted projects
    fetch("/api/fetchSubmittedProjects")
      .then((res) => res.json())
      .then((data) => {
        // Filter out any "Register Business" submissions
        const filteredProjects = data.filter(
          (project) => project.type !== "Register Business"
        );
        setSubmittedProjects(filteredProjects);
      })
      .catch((error) =>
        console.error("Error fetching submitted projects:", error)
      );
  }, []);

  const handleBusinessInputChange = (e) => {
    const { name, value } = e.target;
    setBusinessFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProductInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setProductFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  const validateForm = (formType) => {
    let validationErrors = {};
    if (formType === "business") {
      if (!businessFormData.rwaId)
        validationErrors.rwaId = "RWA ID is required";
      if (!businessFormData.companyName)
        validationErrors.companyName = "Company Name is required";
      if (!businessFormData.category)
        validationErrors.category = "Category is required";
      if (!businessFormData.description)
        validationErrors.description = "Description is required";
      if (!businessFormData.address)
        validationErrors.address = "Address is required";
      if (!businessFormData.phone)
        validationErrors.phone = "Phone number is required";
      if (!businessFormData.email) validationErrors.email = "Email is required";
      if (!businessFormData.sourcingPartnerCode)
        validationErrors.sourcingPartnerCode =
          "Sourcing Partner Code is required";
    } else if (formType === "product") {
      if (!productFormData.productName)
        validationErrors.productName = "Product Name is required";
      if (!productFormData.category)
        validationErrors.category = "Category is required";
      if (!productFormData.description)
        validationErrors.description = "Description is required";
      if (!productFormData.saleAmount)
        validationErrors.saleAmount = "Sale Amount is required";
      if (!productFormData.proofOfOwnership)
        validationErrors.proofOfOwnership = "Proof of ownership is required";
      if (!productFormData.termsAccepted)
        validationErrors.termsAccepted = "You must accept the terms";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleBusinessSubmit = (e) => {
    e.preventDefault();

    if (!validateForm("business")) {
      return;
    }

    // Submit the business partner form
    dispatch(registerBusinessPartner(businessFormData));
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();

    if (!validateForm("product")) {
      return;
    }
       dispatch(submitProduct(productFormData));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* Display loading spinner or error if needed */}
        {loading && <LoadingSpinner/>}
        {error &&
        <Alert 
        variant="error"

        />}
        <Typography variant="h4" gutterBottom textAlign="center">
          Business Partner Portal
        </Typography>
        <Divider sx={{ my: 4 }} />

        {serverError && (
          <Typography color="error" textAlign="center" gutterBottom>
            {serverError}
          </Typography>
        )}

        {approval === "approved" ? (
          <Box>
            <Typography variant="h5" textAlign="center">
              Submit Product Details
            </Typography>
            <form onSubmit={handleProductSubmit}>
              <TextField
                label="Product Name"
                name="productName"
                fullWidth
                margin="normal"
                value={productFormData.productName}
                onChange={handleProductInputChange}
                required
                error={!!errors.productName}
                helperText={errors.productName}
              />
              <TextField
                label="Category"
                name="category"
                fullWidth
                margin="normal"
                value={productFormData.category}
                onChange={handleProductInputChange}
                required
                error={!!errors.category}
                helperText={errors.category}
              />
              <TextField
                label="Description"
                name="description"
                fullWidth
                margin="normal"
                value={productFormData.description}
                onChange={handleProductInputChange}
                required
                error={!!errors.description}
                helperText={errors.description}
              />
              <TextField
                label="Sale Amount"
                name="saleAmount"
                type="number"
                fullWidth
                margin="normal"
                value={productFormData.saleAmount}
                onChange={handleProductInputChange}
                required
                error={!!errors.saleAmount}
                helperText={errors.saleAmount}
              />
              <TextField
                label="Proof of Ownership"
                name="proofOfOwnership"
                fullWidth
                margin="normal"
                value={productFormData.proofOfOwnership}
                onChange={handleProductInputChange}
                required
                error={!!errors.proofOfOwnership}
                helperText={errors.proofOfOwnership}
              />
              <Button variant="contained" component="label" sx={{ my: 2 }}>
                Upload Image
                <input
                  type="file"
                  name="image"
                  hidden
                  accept="image/*"
                  onChange={handleProductInputChange}
                />
              </Button>
              <Button variant="contained" component="label" sx={{ my: 2 }}>
                Upload Video
                <input
                  type="file"
                  name="video"
                  hidden
                  accept="video/*"
                  onChange={handleProductInputChange}
                />
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{ mt: 2 }}
              >
                Submit Product
              </Button>
            </form>
          </Box>
        ) : (
          <Box>
            <Typography variant="h5" textAlign="center">
              Register as Business Partner
            </Typography>
            <form onSubmit={handleBusinessSubmit}>
              <TextField
                label="RWA ID"
                name="rwaId"
                fullWidth
                margin="normal"
                value={businessFormData.rwaId}
                onChange={handleBusinessInputChange}
                required
                error={!!errors.rwaId}
                helperText={errors.rwaId}
              />
              <TextField
                label="Company Name"
                name="companyName"
                fullWidth
                margin="normal"
                value={businessFormData.companyName}
                onChange={handleBusinessInputChange}
                required
                error={!!errors.companyName}
                helperText={errors.companyName}
              />
              <TextField
                label="Category"
                name="category"
                fullWidth
                margin="normal"
                value={businessFormData.category}
                onChange={handleBusinessInputChange}
                required
                error={!!errors.category}
                helperText={errors.category}
              />
              <TextField
                label="Description"
                name="description"
                fullWidth
                margin="normal"
                value={businessFormData.description}
                onChange={handleBusinessInputChange}
                required
                error={!!errors.description}
                helperText={errors.description}
              />
              <TextField
                label="Address"
                name="address"
                fullWidth
                margin="normal"
                value={businessFormData.address}
                onChange={handleBusinessInputChange}
                required
                error={!!errors.address}
                helperText={errors.address}
              />
              <TextField
                label="Phone"
                name="phone"
                fullWidth
                margin="normal"
                value={businessFormData.phone}
                onChange={handleBusinessInputChange}
                required
                error={!!errors.phone}
                helperText={errors.phone}
              />
              <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                value={businessFormData.email}
                onChange={handleBusinessInputChange}
                required
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                label="Sourcing Partner Code"
                name="sourcingPartnerCode"
                fullWidth
                margin="normal"
                value={businessFormData.sourcingPartnerCode}
                onChange={handleBusinessInputChange}
                required
                error={!!errors.sourcingPartnerCode}
                helperText={errors.sourcingPartnerCode}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{ mt: 2 }}
              >
                Register Business
              </Button>
            </form>
          </Box>
        )}

        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" gutterBottom textAlign="center">
          Submitted Projects
        </Typography>
        {submittedProjects.length === 0 ? (
          <Typography textAlign="center">No projects submitted yet.</Typography>
        ) : (
          submittedProjects.map((project) => (
            <Card key={project.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.companyName}
                </Typography>
                <Typography>Status: {project.status}</Typography>
                <Typography>Category: {project.category}</Typography>
                <Typography>
                  Created At: {new Date(project.createdAt).toLocaleString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="secondary">
                  View Details
                </Button>
              </CardActions>
            </Card>
          ))
        )}
      </Box>
    </ThemeProvider>
  );
};

export default BusinessPage;
