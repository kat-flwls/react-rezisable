import React, { useState } from "react";
import { Resizable } from "react-resizable";
import "./ResizableBox.css";
import { DotsSix } from "@phosphor-icons/react";

const ResizableBox = () => {
  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(300);

  const onResize = (
    event: any,
    { size }: { size: { width: number; height: number } }
  ) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Resizable
        height={height}
        width={width}
        onResize={onResize}
        className="resizable-box"
        resizeHandles={["n"]}
        handle={
          <div
            style={{
              position: "absolute",
              top: 0,
              backgroundColor: "#666666",
              width: "100%",
              height: "20px",
            }}
          >
            <DotsSix size={20} color="white" />
          </div>
        }
      >
        <div
          className="box"
          style={{
            width: width + "px",
            height: height + "px",
          }}
        >
          <span>Timeline</span>
        </div>
      </Resizable>
    </div>
  );
};

export default ResizableBox;
