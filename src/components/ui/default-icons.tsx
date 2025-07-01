import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { AiOutlineAntDesign } from "react-icons/ai";

const CustomReactIconsGuide = () => {
  return (
    <div className="max-w-6xl mt-10 mx-6 md:mx-auto p-6 space-y-6 bg-white rounded-lg border border-[#e8eae9] shadow-sm text-sm">
      {/* Explore */}
      <h1 className="text-xl">Icons</h1>
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span className="font-medium text-md">🔍 Explore Icons</span>
        </div>
        <p className="text-gray-600">
          Browse and search for icons directly on the{" "}
          <a
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5d86ff] hover:underline"
          >
            React Icons website
          </a>
          .
        </p>
      </div>

      <hr className="border-[#e8eae9]" />

      {/* Installation */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span className="font-medium text-md">⚙️ Installation</span>
        </div>
        <p className="text-gray-600">Install React Icons using:</p>
        <div className="bg-[#f8f9fe] px-4 py-2 rounded font-mono">
          {/* <span className="text-green-600">npm</span>{' '} */}
          <span className="text-gray-800">npm install react-icons</span>
        </div>
      </div>

      <hr className="border-[#e8eae9]" />

      {/* Usage */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span className="font-medium text-md">🧩 Usage Example</span>
        </div>
        <p className="text-gray-600">
          Import and use any icon in your components:
        </p>

        <div className="bg-[#f8f9fe] px-4 py-3 rounded-md font-mono text-sm text-black leading-relaxed overflow-x-auto">
          <pre>
            <code>
              <span className="text-[#954121]">import</span>
              {""}
              <span>{"{ FiHome }"}</span>
              {""}
              <span className="text-[#954121]">from</span>{" "}
              <span className="text-[#289161]">'react-icons/fi'</span>;{"\n"}
              <span className="text-[#954121]">function</span>{" "}
              <span className="text-[#304b77] font-bold">MyComponent</span>(){" "}
              {"{"}
              {"\n  "}
              <span className="text-[#954121]">return</span>{" "}
              <span className="text-[#000c94]">&lt;FiHome /&gt;</span>;{"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CustomReactIconsGuide;
