//state export


let open = false; // Initial value

// Function to update the 'open' value
export const setSidebarOpen = (state) => {
  open = state;
};

// Export the 'open' variable
export const getSidebarOpen = () => open;