import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Typography, Paper } from '@mui/material';
import Header from './header';
import Footer from './footer';

const columns = [
  { field: '_id', headerName: 'ID', width: 150 },
  { field: 'leaseNo', headerName: 'Lease No', width: 150 },
  { field: 'lesseeName', headerName: 'Lessee Name', width: 200 },
  { field: 'mineralName', headerName: 'Mineral Name', width: 150 },
  { field: 'validity', headerName: 'Validity', width: 150 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  // Add more columns as needed
];

const LeasePage = () => {
  const [leases, setLeases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllLease();
  }, []);
  
  const getAllLease = () => {
    setIsLoading(true);
    setLeases([]); // Clear previous data
  
    const id = JSON.parse(localStorage.getItem("user"));
  
    axios
      .get('http://localhost:4000/lease/getall')
      .then((response) => {
        setLeases(response.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
    <Header />
    <div>
      <Typography variant="h4" gutterBottom>
        Mining Leases
      </Typography>
      <Paper style={{ height: 400, width: '100%' }}>
      <DataGrid
  rows={leases}
  columns={columns}
  pageSize={10}
  loading={isLoading}
  checkboxSelection
  getRowId={(row) => row._id} 
/>
      </Paper>
    </div>
    <Footer/>
    </>
  );
};

export default LeasePage;
