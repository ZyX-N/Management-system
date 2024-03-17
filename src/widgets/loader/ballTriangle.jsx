import React from "react";
import { BallTriangle } from 'react-loader-spinner'

export function BallTriangleSpinner() {
    return (
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="green"
        />
    );
}
