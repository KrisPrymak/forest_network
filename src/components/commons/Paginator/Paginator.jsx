import React from 'react';
import s from './../../Users/Users.module.css';

const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  if(pages.length > 80) {
    let newP = pages.reverse().slice(0, 80);
    pages = newP;
  }

    return (
        <div className={s.pages}>
        {pages.map((p) => {
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
      </div>
    );
};

export default Paginator;