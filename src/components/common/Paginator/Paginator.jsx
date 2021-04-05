import styles from './Paginator.module.scss';
import { useState } from "react";
import classes from "classnames";

function Paginator({ onPageChanged, currentPage, pageSize, totalItemsCount, portionSize = 5 }) {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <nav aria-label="Page navigation" className="mt-5">
            <ul className={`pagination justify-content-center ${styles.usersPagination}`}>
                {portionNumber > 1 &&
                <li className="page-item prev" onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>
                    <span className="page-link" aria-hidden="true">&laquo;</span>
                </li>}
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return (
                            <li
                                className={classes("page-item", { [styles.selectedPage]: currentPage === p })}
                                key={p}
                            >
                                <span className="page-link" onClick={() => {
                                    onPageChanged(p, pageSize)
                                }}>{p}</span>
                            </li>
                        )
                    })}
                {portionCount > portionNumber &&
                <li className="page-item next" onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>
                    <span className="page-link" aria-hidden="true">&raquo;</span>
                </li>}
            </ul>
        </nav>
    )
}

export default Paginator