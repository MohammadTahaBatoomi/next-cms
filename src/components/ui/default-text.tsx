import React from "react";

const typography = [
  {
    tag: "h1",
    label: "h1. Heading",
    size: "text-[30px] md:text-[36px]",
    lh: "leading-[43px] md:leading-[50px]",
    weight: "font-[500]",
  },
  {
    tag: "h2",
    label: "h2. Heading",
    size: "text-[24px] md:text-[30px]",
    lh: "leading-[36px] md:leading-[43px]",
    weight: "font-[500]",
  },
  {
    tag: "h3",
    label: "h3. Heading",
    size: "text-[21px] md:text-[24px]",
    lh: "leading-[31.5px] md:leading-[36px]",
    weight: "font-[500]",
  },
  {
    tag: "h4",
    label: "h4. Heading",
    size: "text-[18px] md:text-[21px]",
    lh: "leading-[27px] md:leading-[31.5px]",
    weight: "font-[500]",
  },
  {
    tag: "h5",
    label: "h5. Heading",
    size: "text-[16px] md:text-[18px]",
    lh: "leading-[24px] md:leading-[27px]",
    weight: "font-[500]",
  },
  {
    tag: "h6",
    label: "h6. Heading",
    size: "text-[14px] md:text-[16px]",
    lh: "leading-[21px] md:leading-[24px]",
    weight: "font-[500]",
  },
];

const textVariants = [
  {
    label: "Text Primary",
    className: "text-[#2a3547]",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
  {
    label: "Text Info",
    className: "text-[#539bff]",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
  {
    label: "Text Primary",
    className: "text-[#5d87ff]",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
  {
    label: "Text Warning",
    className: "text-[#ffae34]",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
  {
    label: "Text Error",
    className: "text-[#fa896b]",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
  {
    label: "Text Success",
    className: "text-[#13dfc0]",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
];

function DefaultText() {
  return (
    <div className="space-y-6 max-w-6x border border-[#e8eae9] rounded-lg shadow-sm p-6 mx-6  ">
      <div className="font-medium mb-2 text-lg">Default Text</div>
      <div className="space-y-4">
        {typography.map((item) => (
          <div key={item.label} className="bg-white rounded-lg shadow-sm p-4">
            {React.createElement(
              item.tag,
              { className: `${item.size} ${item.lh} ${item.weight}` },
              item.label
            )}
            <div className="text-xs text-gray-500 mt-1">
              font size: {item.size.replace("text-", "")} | line-height:{" "}
              {item.lh.replace("leading-", "")} | font weight:{" "}
              {item.weight.replace("font-", "")}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 font-medium text-lg mb-2">Default Text</div>
      <div className="space-y-4 mb-5">
        {textVariants.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm p-4">
            <div className={`font-medium ${item.className}`}>{item.label}</div>
            <div className={`text-sm ${item.className}`}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DefaultText;
