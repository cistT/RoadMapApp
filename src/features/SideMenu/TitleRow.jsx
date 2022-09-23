import React from "react";

import { css } from "@emotion/react";

const TitleRow = () => {
    return (
        <div css={styles.container}>
            <div css={styles.box}>
                <span>苦情番号</span>
                <span>苦情箇所の名称</span>
                <span>情報提供者</span>
            </div>
        </div>
    );
};

const styles = {
  container: css`
    border-bottom: 1px solid #cecece;
  `,
    box: css`
        margin-top: 10px;
        display: flex;
        width: 85%;
        justify-content: space-between;
        font-size: 11px;
    `,
};

export default TitleRow;
