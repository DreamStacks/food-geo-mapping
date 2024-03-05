import { fetchData } from "..";

export const fetchChangeLog = () => {
  return fetchData(
    "https://api.github.com/repos/DreamStacks/food-geo-mapping/contents/CHANGELOG.md?ref=master",
    {
      method: "get",
    }
  );
};
