import React from "react";
import { usePagination, DOTS } from "../../hooks/UsePagination";
import {
  Arrow,
  PaginationBar,
  PaginationContainer,
  PaginationItem,
} from "./PaginationElements";

export const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    window.scrollTo(0, 80);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    window.scrollTo(0, 80);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  const handleDisabled = (side) => {
    if (currentPage === 1 && side === "left") {
      return "disabled";
    }
    if (currentPage === lastPage && side === "right") {
      return "disabled";
    }
  };

  return (
    <>
      <PaginationBar className="bar">
        <PaginationContainer>
          <PaginationItem
            key={"left"}
            onClick={onPrevious}
            className={`${handleDisabled("left")}`}
          >
            <Arrow
              key={"arrowleft"}
              className={`arrow left ${handleDisabled("left")}`}
            />
          </PaginationItem>

          {paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return (
                <PaginationItem key={`${Math.random}`} className="dots">
                  &#8230;
                </PaginationItem>
              );
            }

            return (
              <PaginationItem
                key={pageNumber}
                className={`${currentPage === pageNumber ? "selected" : ""}`}
                onClick={() => {
                  onPageChange(pageNumber);
                  window.scrollTo(0, 80);
                }}
              >
                {pageNumber}
              </PaginationItem>
            );
          })}

          <PaginationItem
            key={"right"}
            onClick={onNext}
            className={`${handleDisabled("right")}`}
          >
            <Arrow
              key={"arrowright"}
              className={`arrow right ${handleDisabled("right")}`}
            />
          </PaginationItem>
        </PaginationContainer>
      </PaginationBar>
    </>
  );
};
