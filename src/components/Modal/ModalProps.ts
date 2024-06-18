import { ReactNode } from "react";

export interface ModalProps {
    onClose: () => {},
    children?: ReactNode,
    actionBar?: React.JSX.Element
}