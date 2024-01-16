import React from 'react'
import SortableTable from '../components/SortableTable/SortableTable'

export default {
    title: 'SortableTable',
    component: SortableTable
}

export const sortabletable = () => {
    const data = [
        { name: 'Orange', color: "bg-orange-500", score: 5},
        { name: 'Apple', color: "bg-red-500", score: 3},
        { name: 'Banana', color: "bg-yellow-500", score: 1},
        { name: 'Lime', color: "bg-green-500", score: 4},
    ]
    const config = [
        { 
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name

        },
        { 
            label: 'Color',
            render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`}/>
        },
        { 
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        }

    ]

    const keyFn = (fruit) => {
        return fruit.name
    }

    return (
        <SortableTable data={data} config={config} keyFn={keyFn}/>
    )
}