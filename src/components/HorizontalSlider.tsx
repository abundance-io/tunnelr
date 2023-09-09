import { ReactNode } from "react";

export default function HorizontalSlider(props: { children: ReactNode }) {
  return (
    <div
      className="flex  overflow-scroll no-scrollbar gap-x-10 py-20
    
    "
    >
      {props.children}
    </div>
  );
}
