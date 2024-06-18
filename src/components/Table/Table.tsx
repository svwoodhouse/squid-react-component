import React from "react"
import { Fragment } from "react"
import { TableProps } from "./TableProps"

const Table = ({ data, config, keyFn } :TableProps<object>) => {
    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return (
                <td key={column.label} className="p-3 border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{column.render(rowData)}</td>
            )
        })

        return (
            <tr key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        )
    })

    const renderedHeaders = config.map((column) => {
        if(column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return (
            <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left" key={column.label}>{column.label}</th>
        )
    })
    return (
        <table className="border-separate border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
            <thead className="bg-slate-50 dark:bg-slate-700">
                <tr>
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default Table