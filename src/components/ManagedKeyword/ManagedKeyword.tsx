import { getKeywords } from "@/app/api/keyword/getKeywords";

async function ManagedKeyword() {
  const { keywords } = await getKeywords();
  console.log(keywords);
  return (
    <div className="py-4 font-semibold text-gray-800 px-4">
      <div className="text-lg mb-3 ">Registered Keyword</div>
      <div className="flex gap-x-2">
        {keywords &&
          keywords.map((word) => <div key={word.keyword}>{word.keyword}</div>)}
      </div>
    </div>
  );
}

export default ManagedKeyword;
