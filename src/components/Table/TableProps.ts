import { ReactNode } from "react"

export interface TableProps<T extends object> {
    data: T[],
    config: Config<T>[],
    keyFn: (obj: T) => React.Key
}

type Config<T extends object> = {
    label: string,
    render: (obj: T) => ReactNode,
    sortValue?: () => {}
    header?: () => ReactNode
}
