import React from 'react';
type ICssProperty = React.CSSProperties & {
    [p: string]: string | number | undefined;
}

export default ICssProperty