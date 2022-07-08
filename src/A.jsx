import App from "./App";
import { css } from "@emotion/react";

const A = () => {
    return (
        <div>
            <h2
                css={css`
                    height: 1000px;
                    border: 1px solid;
                    font-size: 1000px;
                `}
            >
                hello
            </h2>
        </div>
    );
};

const styles = {
    hello: css`
        height: 1000px;
        border: 1px solid;
        font-size: 1000px;
    `,
};

export default A;
