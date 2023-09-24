import { Article } from "@/types";

export const getArticles = async () => {
  const response = await fetch(`https://localhost:3000/api/article`);

  if (!response.ok) {
    throw new Error("unknown error");
  }

  return (await response.json()) as { articles: Article[] };
};
