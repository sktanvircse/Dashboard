import React, { useEffect, useRef, useState } from "react";
import "../../styles/index.scss";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getExpandedRowModel,
} from "@tanstack/react-table";
import { Filter, Menu } from "react-feather";
import { useMediaQuery } from "react-responsive";

const TansTackTable = ({
  data,
  setData,
  columns,
  tableFooter,
  isSorting,
  collumnfilter,
  globalFiltering,
  columnVisible,
  autoExpandEnabled,
  height = "table-min-height",
  globalSearch = "Search...",
}) => {
  const mobileView = useMediaQuery({ query: "(max-width: 767px)" });
  const tabView = useMediaQuery({ query: "(max-width: 1500px)" });
  const defaultColumn = React.useMemo(() => {
    return {
      youTubeProp: "hello world",
    };
  }, []);
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [originalData, setOriginalData] = useState([]);
  const [expanded, setExpanded] = useState({});


  const tableInstance = useReactTable({
    columns: columns,
    data: data,
    defaultColumn: defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnFilters: columnFilters,
      columnVisibility : columnVisible,
      expanded: expanded,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onExpandedChange: setExpanded,
    getSubRows: (row) => row?.subRows,
    meta: {
      selectedRow,
      setSelectedRow,
      revertData: (rowIndex, revert) => {
        if (revert) {
          setData((old) =>
            old?.map((row, index) =>
              index === rowIndex ? originalData[rowIndex] : row
            )
          );
        } else {
          setOriginalData((old) =>
            old?.map((row, index) =>
              index === rowIndex ? data[rowIndex] : row
            )
          );
        }
      },
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old?.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
  });

  useEffect(() => {
    if (autoExpandEnabled && data.length > 0) {
      const expandedState = {};
      data?.forEach((row, index) => {
        expandedState[index] = true;
      });
      setExpanded(expandedState);
    }
  }, [data, autoExpandEnabled]);

  const getTotalItems = (rows) => {
    let total = 0;
    rows.forEach((row) => {
      total++;
      if (row.subRows) {
        total += getTotalItems(row.subRows);
      }
    });
    return total;
  };
  const totalItem = getTotalItems(tableInstance?.getFilteredRowModel()?.rows);
  const columnAccessor = (row) =>
    row.column?.columnDef?.meta?.type === "number";

  return (
    <div>
      {globalFiltering && (
        <div className="flex justify-end mb-6">
          <input
            className="app-input"
            type="text"
            placeholder={globalSearch}
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            style={{
              border: "1px solid #019000",
            }}
          />
        </div>
      )}

      <div className={`table-container ${height}`}>
        <table>
          <thead>
            {tableInstance?.getHeaderGroups()?.map((headerEl) => {
              return (
                <tr key={headerEl.id}>
                  {headerEl.headers.map((columnEl) => {
                    return (
                      <th
                        key={columnEl.id}
                        colSpan={columnEl.colSpan}
                        // style={{ width: columnEl.column.columnDef.size}}
                      >
                        {columnEl.isPlaceholder ? null : (
                          <div
                            style={{ width: columnEl.column.columnDef.size }}
                          >
                            <div className="flex justify-between align-start text-black text-13 font-600">
                              <div>
                                {flexRender(
                                  columnEl.column.columnDef.header,
                                  columnEl.getContext()
                                )}
                              </div>
                              {columnEl.column.columnDef.header !== "Action" &&
                                isSorting && (
                                  <div
                                    onClick={columnEl.column.getToggleSortingHandler()}
                                    className="flex items-center"
                                  >
                                    <div>
                                      <Filter className="filter-icon" />
                                    </div>
                                    <div className="ml-5 pointer">
                                      {
                                        { asc: "🔼", desc: "🔽" }[
                                          columnEl.column.getIsSorted()
                                        ]
                                      }
                                    </div>
                                  </div>
                                )}
                            </div>
                            {collumnfilter &&
                              (columnEl.column.getCanFilter() ? (
                                <div
                                  className="filtering"
                                  style={{
                                    width: columnEl.column.columnDef.size,
                                  }}
                                >
                                  <input
                                    className={`search-filtering`}
                                    type={
                                      columnEl.column.columnDef.meta?.type ===
                                      "number"
                                        ? "number"
                                        : "text"
                                    }
                                    value={columnEl.column.getFilterValue()}
                                    onChange={(e) =>
                                      columnEl.column.setFilterValue(
                                        e.target.value
                                      )
                                    }
                                    placeholder={`Search... `}
                                  />
                                </div>
                              ) : (
                                <div className="filtering mb-35"></div>
                              ))}
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody>
            {tableInstance?.getRowModel()?.rows?.map((rowEl) => {
              return (
                <tr key={rowEl.id}>
                  {rowEl?.getVisibleCells()?.map((cellEl) => {
                    return (
                      <td
                        style={{
                          // backgroundColor: cellEl.row.subRows.length > 0 ? "#68ebf0" : "",
                          color: cellEl.row.depth * 2 ? "#019000" : "initial",
                        }}
                        key={cellEl.id}
                        className={` "text-13 font-600 text-blue-dark px-15 " ${
                          columnAccessor(cellEl) ? "text-right " : "text-start "
                        } `}
                      >
                        {flexRender(
                          cellEl?.column.columnDef.cell,
                          cellEl?.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {tableFooter && (
        <div className="table-footer">
          <div className="mt-10 text-16 font-700 text-blue-dark">
            Total Item : {totalItem}
          </div>
          <div className="flex mt-10">
            <div
              className={` ${
                mobileView ? "" : "flex align-center justify-center g-6"
              } `}
            >
              <div
                className={`${
                  mobileView ? "mb-10 g-20" : ""
                } flex align-center justify-center g-6`}
              >
                <button
                  type="button"
                  className="arrow-icon"
                  onClick={() => tableInstance?.setPageIndex(0)}
                  disabled={!tableInstance?.getCanPreviousPage()}
                >
                  {"<<"}
                </button>
                <button
                  type="button"
                  className="arrow-icon"
                  onClick={() => tableInstance?.previousPage()}
                  disabled={!tableInstance?.getCanPreviousPage()}
                >
                  {"<"}
                </button>
                <span className="flex items-center gap-1 mx-6">
                  <span className="mr-8">Page</span>
                  <strong>
                    {tableInstance?.getPageCount()
                      ? tableInstance?.getState().pagination.pageIndex + 1
                      : tableInstance?.getState().pagination.pageIndex}{" "}
                    of {tableInstance?.getPageCount()}
                  </strong>
                </span>

                <button
                  type="button"
                  className="arrow-icon "
                  onClick={() => tableInstance.nextPage()}
                  disabled={!tableInstance.getCanNextPage()}
                >
                  {">"}
                </button>
                <button
                  type="button"
                  className="arrow-icon"
                  onClick={() =>
                    tableInstance?.setPageIndex(
                      tableInstance?.getPageCount() - 1
                    )
                  }
                  disabled={!tableInstance?.getCanNextPage()}
                >
                  {">>"}
                </button>
              </div>

              <div className="flex align-center justify-center g-6">
                <span className="flex align-center justify-center gap-1">
                  <span className="">Go to page:</span>
                  <input
                    type="number"
                    disabled={!tableInstance?.getPageCount()}
                    defaultValue={
                      tableInstance?.getState().pagination.pageIndex + 1
                    }
                    onChange={(e) => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      tableInstance?.setPageIndex(page);
                    }}
                    className="page-search w-60"
                  />
                </span>
                <select
                  className="page-search text-black"
                  value={tableInstance?.getState().pagination.pageSize}
                  onChange={(e) => {
                    tableInstance?.setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 50, 100, totalItem].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize === totalItem ? "All" : pageSize}
                    </option>
                  ))}
                </select>
                {/* <div className="mt-4">{tableInstance.getRowModel().rows.length} Rows</div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <div>{tableInstance.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(tableInstance.getState().pagination, null, 2)}</pre> */}
    </div>
  );
};

export default TansTackTable;
