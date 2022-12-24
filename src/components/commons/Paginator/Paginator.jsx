import React, { useState } from 'react';
import s from './../../Users/Users.module.css';
import cn from 'classnames';

const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setportionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
 


    return (
        <div className={s.pages}>
          {portionNumber > 1 && 
          <button className={s.previous}  onClick={() => {setportionNumber(portionNumber - 1)}}>
            <img src="https://cdn-icons-png.flaticon.com/512/570/570220.png" alt="prev" />
        </button>}
        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => {
          return (
            <span 
              className={currentPage === p && s.selectedPage}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
        { portionCount > portionNumber && <button className={s.next} onClick={() => {setportionNumber(portionNumber + 1)}}>
          <img src="https://cdn-icons-png.flaticon.com/512/318/318275.png" alt="next" />
          </button>}
      </div>
    );
};

export default Paginator;