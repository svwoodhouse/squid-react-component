import React from 'react'
import Button from '../components/Button/Button'

export default {
    title: 'Button',
    component: Button
}

export const primary = () => <Button primary>Primary</Button>
export const secondary = () => <Button secondary>Secondary</Button>
export const success = () => <Button success>Success!</Button>
export const danger = () => <Button danger>Danger!</Button>
export const warning = () => <Button warning>Warning!</Button>
export const outline = () => <Button outline>Outline</Button>
export const rounded = () => <Button rounded>Rounded</Button>