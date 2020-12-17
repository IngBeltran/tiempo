import React from 'react'
import Result from './Result'

export default function Results({items}) {
    return (
        <div>
            <ul style={{display: 'table', margin: '0 auto'}}>
                {
                    items.map(item => <Result title={item.title} key={item.id} />)
                }
            </ul>
        </div>
    )
}

