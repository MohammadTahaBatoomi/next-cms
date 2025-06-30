import React from "react";

const elevations = [
  { label: "elevation=0", shadow: "shadow-none" },
  { label: "elevation=1", shadow: "shadow-sm" },
  { label: "elevation=2", shadow: "shadow" },
  { label: "elevation=3", shadow: "shadow-md" },
  { label: "elevation=4", shadow: "shadow-lg" },
  { label: "elevation=6", shadow: "shadow-xl" },
  { label: "elevation=8", shadow: "shadow-2xl" },
  { label: "elevation=12", shadow: "shadow-[0_8px_24px_rgba(0,0,0,0.25)]" },
  { label: "elevation=16", shadow: "shadow-[0_10px_30px_rgba(0,0,0,0.30)]" },
  { label: "elevation=24", shadow: "shadow-[0_12px_48px_rgba(0,0,0,0.45)]" },
];

export default function DefaultShadow() {
  return (
    <div className="flex justify-center items-start bg-transparent py-2">
      <div className="bg-white rounded-2xl shadow-lg p-2 md:p-10 w-full max-w-6xl">
        <h2 className="text-lg font-semibold mb-6 text-neutral-800">Shadow</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* روشن */}
          <div className="flex-1 flex justify-center">
            <div className="grid grid-cols-2 gap-6 md:gap-4 w-full">
              {elevations.map((e, i) => (
                <div
                  key={e.label + "-light"}
                  className={`flex items-center justify-center rounded-sm font-medium transition-all p-4
                    bg-white text-neutral-700
                    ${e.shadow}
                  `}
                >
                  {e.label}
                </div>
              ))}
            </div>
          </div>

          {/* تاریک */}
          <div className="flex-1 flex justify-center">
            <div className="bg-[#111111] p-4 w-full">
              <div className="grid grid-cols-2 gap-6 md:gap-4 w-full">
                {elevations.map((e, i) => (
                  <div
                    key={e.label + "-dark"}
                    className={`flex items-center justify-center rounded-sm font-medium transition-all p-4
                      ${
                        e.label === "elevation=0"
                          ? "bg-transparent"
                          : "bg-neutral-800"
                      } text-neutral-200
                      ${e.shadow}
                    `}
                  >
                    {e.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
