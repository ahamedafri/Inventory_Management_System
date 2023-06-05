import { css } from "@emotion/react";

const styles = () => {
  const head = css`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 5px;
    color: Black;
    border: solid;
    border-width: thin;
    margin-bottom: 10px;
  `;

  const row = css`
    border: solid;
    border-width: thin;
  `;

  const cell = css`
    font-family: Nunito;
    border: solid;
    border-width: thin;
    font-style: normal;
    font-size: 16px;
    color: Black;
    padding: 4px;
  `;

  const cellDeleted = css`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #878787;
  `;

  const textTruncate = css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:last-child {
      text-align: right;
    },
  `;

  const textTruncateTextWrap = css`
    overflow: hidden;
    text-overflow: ellipsis;
    &:last-child {
      text-align: right;
    },
  `;
  const tableHeaderForSticky = css`
    position: sticky;
    z-index: 999;
  `;

  return {
    head,
    row,
    cell,
    cellDeleted,
    textTruncate,
    textTruncateTextWrap,
    tableHeaderForSticky,
  };
};

export default styles;
