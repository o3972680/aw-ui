import React, { CSSProperties, ReactElement } from "react";

export type NativeProps<S extends string = never> = {
  className?: string;
  style?: CSSProperties & Partial<Record<S, string>>;
};

export const withNativeProps = <P extends NativeProps>(
  props: P,
  element: ReactElement
) => {
  const p = {
    ...element.props,
  };
  if (props.className) {
    p.className = `${element.props.className} ${props.className}`;
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    };
  }

  return React.cloneElement(element, p);
};
