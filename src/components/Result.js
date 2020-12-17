import React from 'react'
import styles from './styles/Result.module.css'

export default function Result({title}) {
    return (
        <li className={`${styles.item}`}>
            {title}
        </li>
    )
}

