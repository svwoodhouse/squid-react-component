import { ReactNode } from "react";

export interface PanelProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    className?: string
}