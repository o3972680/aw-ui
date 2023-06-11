import { useState, useEffect } from "react";
import countStyles from "./Count.module.scss";
// import { NativeProps, withNativeProps } from "../utils";

export type CountProps = {
  count: number;
  title?: string;
};

// const defaultProps = {
//   title: "Counter",
//   count: 0,
// };

// type RequireType = keyof typeof defaultProps;

const Count = (props: CountProps) => {
  const { count, title } = props;

  const [c, setC] = useState(count);

  useEffect(() => {
    setC(count);
  }, [count]);
  return (
    <div className={countStyles.container}>
      <h4 className={countStyles.title}>{title}</h4>
      <h4 className={countStyles.count}>{c}</h4>
      <button
        onClick={() => {
          setC((c) => ++c);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Count;
