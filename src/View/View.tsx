import { classNamesFunction, styled } from "@fluentui/react";
import React from "react";
import { getStyles } from "./View.styles";
import { IViewProps, IViewStyleProps, IViewStyles } from "./View.types";

const getClassNames = classNamesFunction<IViewStyleProps, IViewStyles>();

const ViewBase = ({ styles }: IViewProps) => {
    const classNames = getClassNames(styles );
    return (
        <div className={classNames.root}>
            View Placeholder
            New content
        </div>
    );
};

export const View = styled<IViewProps, IViewStyleProps, IViewStyles>(ViewBase, getStyles);
