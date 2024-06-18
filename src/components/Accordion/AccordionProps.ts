export interface AccordionProps {
    items?: AccordionItems[]
}

export type AccordionItems = {
    id: string,
    label: string,
    content: string
}