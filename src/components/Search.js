import React from 'react'
import styles from './styles/Search.module.css'

export default function Search(props) {
    return (
        <div>
            <input type="text" className={`${styles.searchInput}`} onKeyPress={props.handleSearch} placeholder="Search" ></input>
        </div>
    )
}
