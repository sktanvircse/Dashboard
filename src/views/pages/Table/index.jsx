import React, { useEffect, useState } from 'react'
import { createColumnHelper } from "@tanstack/react-table";
import TansTackTable from "../../../components/sharedComponent/TansTackTable";
import Data from "../../partial/data.json"


const Table = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(Data)
    },[])


    const columnHelper = createColumnHelper();
    const columns = [
        columnHelper.accessor("id", {
            header: "ID",
            enableColumnFilter: false,
            size: "30px",
        }),
        columnHelper.accessor("first_name", {
            header: "First Name",
            // size: "150px",
        }),
        columnHelper.accessor("last_name", {
            header: "Last Name",
            // size: "100px",
        }),
        columnHelper.accessor("email", {
            header: "Email",
            // size: "150px",
        }),
        columnHelper.accessor("date", {
            header: "Entry Date",
            // size: "100px",
        }),
        columnHelper.accessor("gender", {
            header: "Gender",
            // size: "100px",
        }),
    ];


    return (
        <>
            <TansTackTable
                columns={columns}
                data={data}
                tableFooter
                isSorting
                collumnfilter
            />
        </>
    )
}

export default Table;
