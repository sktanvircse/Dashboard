import React, { useState } from 'react'
import { createColumnHelper } from "@tanstack/react-table";
import TansTackTable from "../../../components/sharedComponent/TansTackTable";


const Table = () => {

    const [data, setData] = useState([]);


    const columnHelper = createColumnHelper();
    const columns = [
        columnHelper.accessor("sl", {
            header: "SL",
            enableColumnFilter: false,
            size: "30px",
        }),
        columnHelper.accessor("", {
            header: "Consumption Date",
            // size: "150px",
        }),
        columnHelper.accessor("", {
            header: "Amount",
            // size: "100px",
            meta: {
                type: "number"
            }
        }),
        columnHelper.accessor("remarks", {
            header: "Remarkes",
            // size: "150px",
        }),
        columnHelper.accessor("status", {
            header: "Status",
            // size: "100px",
        }),
    ];


    return (
        <>
            <TansTackTable
                columns={columns}
                data={data}
                tableFooter
                // isSorting
                // collumnfilter
                // columnPinning
            />
        </>
    )
}

export default Table;
