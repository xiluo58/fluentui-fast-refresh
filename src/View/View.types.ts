import { IStyle, IStyleFunctionOrObject, ITheme } from "@fluentui/react";

export interface IViewProps {
    styles?: IStyleFunctionOrObject<IViewStyleProps, IViewStyles>;
    theme?: ITheme;
}

export interface IViewStyleProps {
    theme: ITheme;
}

export interface IViewStyles {
    root: IStyle;
}
