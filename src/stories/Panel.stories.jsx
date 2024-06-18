import Panel from "../components/Panel"

export default {
    title: 'Panel',
    component: Panel
}

export const panel = () => {
    return (
        <Panel>
            <div>Hello There!</div>
        </Panel>
    )
}