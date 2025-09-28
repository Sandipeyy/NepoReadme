import React, { useEffect, useState } from "react";
import FilterButton from "../elements/buttons/FilterButton";
import NextButton from "../elements/buttons/NextButton";
import Pagination from "../elements/Pagination";
import { useNepoStore } from "../mobx/Nepocontext";
import { useObserver } from "mobx-react";
import Socials from "./Socials";
import FeedbackButton from "../elements/FeedbackButton";
import themes from "../../data/themes";

export default function GitHubStats({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const nepoStore = useNepoStore();
  const [theme, setTheme] = useState(nepoStore.data.stats.theme);
  const [border, setBorder] = useState(nepoStore.data.stats.border);
  const [includeAll, setIncludeAll] = useState(nepoStore.data.stats.lifetime);
  const [includePrivate, setIncludePrivate] = useState(
    nepoStore.data.stats.prv
  );
  function onNext() {
    githubstats = `# 📊 GitHub Stats:
![](${document.getElementById("stats").getAttribute("src")})<br/>
![](${document.getElementById("streak").getAttribute("src")})<br/>
![](${document.getElementById("langs").getAttribute("src")})
`;
    setIsVisible(true);
  }
  useEffect(() => {
    nepoStore.data.stats.theme = theme;
    nepoStore.data.stats.border = border;
    nepoStore.data.stats.lifetime = includeAll;
    nepoStore.data.stats.prv = includePrivate;
  });
  return useObserver(() => (
    <>
      {isVisible ? (
        <Socials back={() => setIsVisible(false)} />
      ) : (
        <div className="flex flex-col items-center fade-on-appear">
          <button
            className="left-0 absolute m-10 opacity-80 hover:opacity-100 transition-all ease-in-out outline-none"
            onClick={back}
          >
            ◄ Go Back
          </button>
          <p className="w-full text-center text-3xl my-10 mt-20">
            Flex your GitHub Stats
          </p>
          {/* Options */}
          <div className="flex flex-wrap justify-center items-center">
            Theme:
            <select
              id="theme"
              value={nepoStore.data.stats.theme}
              onChange={() => setTheme(document.getElementById("theme").value)}
              className="bg-transparent py-1 px-2 outline-none"
            >
              {themes.map((item) => {
                return (
                  <option key={item} value={item} className="bg-zinc-900">
                    {item}
                  </option>
                );
              })}
            </select>
            <FilterButton
              chk={border}
              title="Border"
              onClick={() => setBorder(!border)}
            />
            <FilterButton
              title="Lifetime Commits"
              chk={includeAll}
              onClick={() => setIncludeAll(!includeAll)}
            />
            <FilterButton
              title="Private Commits"
              chk={includePrivate}
              onClick={() => setIncludePrivate(!includePrivate)}
            />
          </div>
          <p className="mt-4 text-green-300 opacity-90">
            please wait for images to load after changing any values
          </p>
          <div className="w-full md:w-8/12 justify-center flex flex-col flex-wrap md:my-4">
            <img
              className="m-2 select-none pointer-events-none"
              draggable="false"
              id="stats"
              src={`https://github-readme-stats.vercel.app/api?username=${
                nepoStore.data.username
              }&theme=${theme}&hide_border=${!border}&include_all_commits=${includeAll}&count_private=${includePrivate}`}
              alt=""
            />
            <img
              className="m-2 select-none pointer-events-none"
              draggable="false"
              id="streak"
              src={`https://nirzak-streak-stats.vercel.app/?user=${
                nepoStore.data.username
              }&theme=${theme}&hide_border=${!border}`}
              alt=""
            />
            <img
              className="m-2 select-none pointer-events-none"
              draggable="false"
              id="langs"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
                nepoStore.data.username
              }&theme=${theme}&hide_border=${!border}&include_all_commits=${includeAll}&count_private=${includePrivate}&layout=compact`}
              alt=""
            />
          </div>
          <NextButton onClick={() => onNext()} />
          <Pagination val={2} />
          <FeedbackButton />
        </div>
      )}
    </>
  ));
}

export var githubstats = ``;