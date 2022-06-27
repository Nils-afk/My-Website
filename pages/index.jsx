import Head from "next/head";
import Image from "next/image";
import swr from "../lib/swr";
import Tippy from "@tippyjs/react";

const items = [
  {
    icon: "fab fa-spotify",
    link: "https://open.spotify.com/user/313f6kzmredixvc4ymhcscqcrpsq",
  },
  { icon: "fab fa-instagram", link: "https://instagram.com/accounts/login" },
  { icon: "fab fa-github", link: "https://github.com/nils-afk" },
  {
    icon: "fab fa-discord",
    link: "https://discord.com/users/776757761701838858",
  },
];

export default function Home() {
  const { data: _profile } = swr(
    "https://linkcord.js.org/api/v3/user/776757761701838858"
  );
  const profile = _profile ? _profile.data : null;

  const { data: _repositories } = swr("/api/repos");
  const repositories = _repositories ? _repositories : null;

  const { data: _technologies } = swr("/api/techs");
  const technologies = _technologies ? _technologies : null;
  const statuses = {
    dnd: {
      label: "Do not Disturb",
    },
    idle: {
      label: "Idle",
    },
    online: {
      label: "Online",
    },
    offline: {
      label: "Offline",
    },
  };
  return (
    <>
      <div className="bg-[#191932]/20 shadow-xl rounded-lg w-full h-auto mt-6">
        {_profile ? (
          profile ? (
            <div className="relative">
              <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
                <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                  <div className="flex items-center">
                    <p className="flex items-center text-white text-4xl font-semibold">
                      Nils
                    </p>
                    {profile.status !== "offline" && (
                      <Tippy
                        content={`${
                          statuses[profile.status].label
                        } on Discord`}
                        animation="shift-away"
                        arrow={false}
                      >
                        <span
                          className={`ml-2 text-${profile.status} px-2 py-1 font-normal rounded-md text-sm`}
                        >
                          <i
                            className={`fa fa-circle text-${profile.status} mr-2`}
                          />
                          {statuses[profile.status].label}
                        </span>
                      </Tippy>
                    )}
                  </div>
                  <p className="text-white/50 text-md mt-3">
                  Hi, I`m Nils. I am a 2th year high school student and I have been spending time with codes for about 1-2 years. I really dont know anything more about me. Thanks for reading :)
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-${profile.status} `}>
                <img alt="Nils" src={`https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
                <div className={`bg-[#040404] rounded-full px-[4px] py-[1px] flex items-center absolute bottom-0 right-4`}>
                <Tippy content={statuses[profile.status].label} animation="shift-away" arrow={false}>
                    <i className={`fad fa-circle text-2xl text-${profile.status}`} />
                  </Tippy>
                </div>
              </div>
              
            </div>
              <span
                style={{ zIndex: "-1" }}
                className="text-white/5 absolute bottom-3 left-7 text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold"
              >
                Self-taught Web Developer
              </span>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="bg-neutral-700/30 animate-pulse w-1/2 h-[24px] rounded-md" />
                <div className="mt-2 bg-neutral-700 animate-pulse w-[95%] h-[96px] rounded-md" />
              </div>
              <div className="order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full">
                <div className="bg-neutral-700/30 animate-pulse w-[160px] h-[160px] rounded-full" />
                <div className="absolute bottom-1 right-5 bg-neutral-700 border-4 border-neutral-800 animate-pulse w-[32px] h-[32px] rounded-full" />
              </div>
            </div>
          )
        ) : (
          <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
            <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
              <div className="bg-neutral-700/30 animate-pulse w-1/2 h-[24px] rounded-md" />
              <div className="mt-2 bg-neutral-700/30 animate-pulse w-[95%] h-[96px] rounded-md" />
            </div>
            <div className="order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full">
              <div className="bg-neutral-700/30 animate-pulse w-[160px] h-[160px] rounded-full" />
              <div className="absolute bottom-1 right-5 bg-neutral-700 border-4 border-neutral-800 animate-pulse w-[32px] h-[32px] rounded-full" />
            </div>
          </div>
        )}
      </div>
      
      <div id="main-content">
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
      <div className="relative">
      <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
      <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
   
      <p className="text-3xl text-white font-semibold">Spotify</p>
      <p className="text-xl text-white/50 font-normal">The song I'am listening on gets displayed here.</p>
      <iframe src="https://linkcord.js.org/api/v3/widget/776757761701838858?type=spotify_large&theme=dark" className={`w-[100%] h-[140px]`}></iframe>
      </div>
      </div>
      </div>
      </div>
</div>

      <div id="main-content">
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
      <div className="relative">
      <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
      <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
   
      <p className="text-3xl text-white font-semibold">Visual Studio Code</p>
      <p className="text-xl text-white/50 font-normal">Here you can see my Visual Studio Code Edits.</p>
      <iframe src="https://linkcord.js.org/api/v3/widget/776757761701838858?type=vsc&theme=dark" className={`w-[100%] h-[140px]`}></iframe>
      </div>
      </div>
      </div>
      </div>
</div>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold">Repositories</p>
        <p className="text-xl text-white/50 font-normal">
          My open source codes on Github.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 items-center mt-2">
          {_repositories
            ? repositories
              ? repositories
                  .sort((a, b) => b.stargazers_count - a.stargazers_count)
                  .map((_, __) => (
                    <a
                      key={__}
                      href={`https://github.com/${_.full_name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#191932]/20 p-4 hover:bg-[#191932]/30 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
                    >
                      <p className="text-md text-white">
                        <span className="text-sm text-white/50 bg-black/25 px-2 py-1 rounded-md mr-1">
                          {_.owner.login}
                        </span>
                        {_.name}
                      </p>
                      <div className="mt-5 flex justify-end w-full h-full items-center">
                        <div className="flex w-full justify-between items-center">
                          <Tippy
                            content={"Stars"}
                            arrow={false}
                            animation="shift-away"
                          >
                            <div className="flex items-center">
                              <p className="text-sm">
                                <i className="fal fa-star mr-2" />
                              </p>
                              <p>{_.stargazers_count}</p>
                            </div>
                          </Tippy>
                          <div className="text-sm text-white bg-black/25 px-2 py-1 rounded-md mr-1">
                            {_.language || "Empty"}
                          </div>
                          <Tippy
                            content={"Forks"}
                            arrow={false}
                            animation="shift-away"
                          >
                            <div className="flex items-center justify-end">
                              <p>{_.forks}</p>
                              <p className="text-sm">
                                <i className="fal fa-code-branch ml-2" />
                              </p>
                            </div>
                          </Tippy>
                        </div>
                      </div>
                    </a>
                  ))
              : Array.from({ length: 6 }).map((_, __) => (
                  <div
                    key={__}
                    className="bg-[#191932]/20 p-4 rounded-lg w-full"
                  >
                    <div className="bg-[#191932]/50 animate-pulse w-full h-[28px] rounded-md" />
                    <div className="mt-5 flex w-full justify-between items-center">
                      <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                      <div className="bg-[#191932]/50 animate-pulse w-24 h-[24px] rounded-md" />
                      <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                    </div>
                  </div>
                ))
            : Array.from({ length: 6 }).map((_, __) => (
                <div key={__} className="bg-[#191932]/20 p-4 rounded-lg w-full">
                  <div className="bg-[#191932]/50 animate-pulse w-full h-[28px] rounded-md" />
                  <div className="mt-5 flex w-full justify-between items-center">
                    <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                    <div className="bg-[#191932]/50 animate-pulse w-24 h-[24px] rounded-md" />
                    <div className="bg-[#191932]/50 animate-pulse w-12 h-[24px] rounded-md" />
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold">Technologies I use</p>
        <p className="text-xl text-white/50 font-normal">
          The technologies I use are listed here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 items-center mt-2">
          {_technologies
            ? technologies
              ? technologies.map((_, __) => (
                  <div
                    key={__}
                    className="cursor-pointer bg-[#191932]/20 p-2 px-4 hover:bg-[#191932]/30 shadow-lg transition-all duration-200 rounded-lg w-full"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex justify-center items-center h-[26px]">
                        <img
                          alt="clqu"
                          src={_.src}
                          className="rounded-md"
                          width="24"
                          height="24"
                          style={{ fill: "#fff!important;" }}
                        />
                      </div>
                      <p className="text-md font-semibold">{_.name}</p>
                    </div>
                  </div>
                ))
              : Array.from({ length: 20 }).map((_, __) => (
                <div
                  key={__}
                  className="bg-[#191932]/20 p-4 hover:bg-[#191932]/30 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-shrink-0 w-[36px] h-[36px] mr-2">
                      <div className="bg-[#191932]/50 w-[36px] h-[36px] rounded-md animate-pulse" />
                    </div>
                    <div className="bg-[#191932]/50 w-44 h-[24px] rounded-md animate-pulse" />
                  </div>
                </div>
                ))
            : Array.from({ length: 20 }).map((_, __) => (
                <div
                  key={__}
                  className="bg-[#191932]/20 p-4 hover:bg-[#191932]/30 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-shrink-0 w-[36px] h-[36px] mr-2">
                      <div className="bg-[#191932]/50 w-[36px] h-[36px] rounded-md animate-pulse" />
                    </div>
                    <div className="bg-[#191932]/50 w-44 h-[24px] rounded-md animate-pulse" />
         <div>
        <title>Home | nils-fuchs.ml</title>
        <meta name="description" content="View all the information about Nils here." />
        <link rel="icon" href="/assets/techs/favicon.png" type="image/x-icon" />
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
