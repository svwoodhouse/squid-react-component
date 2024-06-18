import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'
import Table from "../Table/Table";
import useSort from '../../hooks/use-sort';
import { SortableTableProps } from './SortableTableProps';
import React from 'react';

const SortableTable = (props: SortableTableProps<object>) => {
    const { config, data } = props;
    const {sortedData, sortBy, sortOrder, setSortColumn} = useSort(data, config)

    const updatedConfig = config.map((column) => {
        if(column.sortValue)
            return {...column, header: () => (
            <th className="cursor-pointer hover:bg-slate-500 w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left" onClick={()=> setSortColumn(column.label)}>
                <div className='flex items-center '>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
                </th>
            )}

        else
            return column
    })

    return (
        <Table {...props} data={sortedData} config={updatedConfig}/>
    )
}

function getIcons (label, sortBy, sortOrder) {
    const style = 'mr-2'
    if (label !== sortBy)
        return <div className={style}>
            <GoTriangleUp/>
            <GoTriangleDown/>
        </div>

    if(sortOrder === 'null') {
        return <div className={style}>
            <GoTriangleUp/>
            <GoTriangleDown/>
        </div>
    } else if (sortOrder === 'asc') {
        return <div className={style}>
            <GoTriangleUp/>
        </div>
    }
    else if (sortOrder === 'desc') {
        return <div className={style}>
            <GoTriangleDown/>
        </div>
    }
}

export default SortableTable