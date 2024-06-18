export interface DropdownProps {
    value?: DropDownOption,
    options?: DropDownOption[],
    onChange: (option: string) => {}
}

export type DropDownOption = {
    value: string,
    label: string,
}