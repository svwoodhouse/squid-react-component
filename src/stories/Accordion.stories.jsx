import React from 'react'
import Accordion from '../components/Accordion/Accordion'

export default {
    title: 'Accordion',
    component: Accordion
}

export const accordion = () => {
    const items = [
        {
          id: 'sasa221',
          label: 'Can I use React on a project?',
          content: "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want."
        },
        {
          id: 'sosa122',
          label: 'Can I use Javascript on a project?',
          content: "You can use Javascript on any project you want."
        },
        {
          id: 'ssaaa123',
          label: 'Can I use CSS on a project?',
          content: "You can use CSS on any project you want."
        }
      ]
      return (
        <div>
            <Accordion items={items}/>
        </div>
      )
}