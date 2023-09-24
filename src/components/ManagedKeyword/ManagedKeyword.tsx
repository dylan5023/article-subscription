"use client";
import { Chip } from "@nextui-org/react";
async function ManagedKeyword() {
  const keywords = ["Node.js", "nest.js", "react", "crawler"];
  return (
    <div className="py-4 font-semibold text-gray-800 px-4">
      <div className="text-lg mb-3 ">Registered keyword</div>
      <div className="flex gap-x-2">
        {keywords &&
          keywords.map((keyword) => (
            <div key={keyword.keyword}>{keyword.keyword}</div>
          ))}
      </div>
    </div>
  );
}

export default ManagedKeyword;
