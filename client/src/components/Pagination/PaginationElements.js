import styled from "styled-components";

export const PaginationBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const PaginationItem = styled.li.attrs((props) => ({
  className: props.className,
}))`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  /* border-radius: 16px; */
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  border: 1px solid #cadbe8;

  &.dots {
    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }

  &.selected {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

  &.disabled {
    pointer-events: none;

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;

export const Arrow = styled.div`
  &::before {
    position: relative;
    /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
    content: "";
    /* By using an em scale, the arrows will size with the font */
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }

  &.left {
    transform: rotate(-135deg) translate(-50%);
  }

  &.right {
    transform: rotate(45deg);
  }

  &.disabled {
    &::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }
  }
`;
