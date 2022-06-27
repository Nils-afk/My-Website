export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/avatars/936705997840449567/8322b0dbfc4676eded11a2db8b83599a.webp",
      name: "GamerArmy",
      description:
        "Do you want to expand and improve your Discord bot? Here GamerArmy Bot List are here for you!",
      link: "https://gamerarmy-bot-list.ml",
      language: "Node.js",
      languageIcon: "./assets/techs/nodejs.svg",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/avatars/932012704779091998/2a68d7b6b068773acc73b8314fe8b2ed.png",
      name: "Scriptino",
      description:
        "The Best 600+ Commands Discord Bot making by me!",
      link: "https://scriptino-bot.com",
      language: "node.js",
      languageIcon: "./assets/techs/nextjs.svg",
   },
  ];
  res.status(200).json(data);
};