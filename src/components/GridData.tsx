'use client'
import React from "react";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetter,
} from "@mui/x-data-grid";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from "next/link";
import { useStore } from "@/store";

interface props {
  action : string,
  data : any
}

const DataOfGrid = ({action,data}:props) => {
const {dispatch} = useStore()

  if(action==='detail'){



  const userRows: any[] = data.map((order: any) => ({
    id: order._id,
    calories: order.totalItems, 
    price: order.totalPrice,
    weight: order.totalWeight,
  }));

  const userColumns: GridColDef[] = [
    { field: "id", headerName: "Order Id", width: 150 },
    { field: "price", headerName: "Total Price", width: 120, type: "number" },
    { field: "weight", headerName: "Weight", width: 100, type: "number" },
    { field: "calories", headerName: "Total Items", width: 150, type: "number" },
  ];

  const actionColumn: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
          return (
            <div className="flex mt-2 gap-4">
              <Link onClick={()=>dispatch({type:'order',payload:data})} href={`/order/${params.row.id}`}>
               
                  <button className="bg-blue-600 text-white px-4 rounded-xl h-[38px] flex items-center">View Details</button>
              
              </Link>
              
            </div>
          );
       
      },
    },
  ];
  

  return (
    <>
      <div className="h-[50%] w-[100%] mt-[15px]">
        <DataGrid
          className="bg-white"
          rows={userRows}
          columns={[...userColumns, ...actionColumn]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 6 },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[6]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </div>
    </>
  )
}

else

{
  const userRows: object[] = [
    {
      id: 1,
      name: "Vegetable Salad",
      desc: "A pure veg health salad",
      calories: 150,
      price: 5.99,
      weight: "400g",
    },
  ];

  const userColumns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "pic",
      headerName: "Pic",
      width: 100,
      renderCell: (params) => {
        return (
          <Image
            src=""
            alt=""
            className="w-[32px] h-[32px] rounded-[50%] object-cover"
          />
        );
      },
    },
    { field: "name", headerName: "Name", width: 150, type: "string" },
    { field: "price", headerName: "Price", width: 120, type: "number" },
    { field: "weight", headerName: "Weight", width: 100, type: "number" },
    { field: "calories", headerName: "Calories", width: 150, type: "number" },
    { field: "desc", headerName: "Description", width: 400 },
  ];

  const actionColumn: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="flex gap-4">
            <Link href="/add-item/hello">
              <div className="mt-2.5 text-2xl text-green-700 cursor-pointer font-bold">
                <CiEdit />
              </div>
            </Link>
            <div className="mt-2.5 text-2xl text-red-500 cursor-pointer">
              <RiDeleteBin6Line />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="h-[50%] w-[100%] mt-[15px]">
        <DataGrid
          className="bg-white"
          rows={userRows}
          columns={[...userColumns, ...actionColumn]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 6 },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[6]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </div>
    </>
  );
}
};

export default DataOfGrid;
