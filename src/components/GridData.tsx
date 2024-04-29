import React from "react";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";

const DataOfGrid = () => {
  const rows = [
    {
      id: 1,
      phoneNumber: "123-456-7890",
      name: "John Doe",
      email: "john@example.com",
      clientType: "Type A",
      clientOccupation: "Engineer",
      clientRating: "5 stars",
      buyingIntent: "High",
      classification: "VIP",
      source: "Referral",
      currentTaskType: "Follow-up",
      currentTaskSubType: "Email",
      comment: "Interested in product XYZ",
      nextTask: "Call",
      deadline: "2023-08-31",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "phoneNumber", headerName: "Phone Number", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "clientType", headerName: "Client Type", width: 150 },
  ];

  return (
    <>
      <div
        style={{
          height: 400,
          width: "100%",
          background: "white",
          padding: "20px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </div>
    </>
  );
};

export default DataOfGrid;
