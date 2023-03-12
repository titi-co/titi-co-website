export const projects = [
  {
    id: "1",
    cover: "mglt-app.png",
    name: "MGLT-Calculator",
    description:
      "This project calculates the number of stops necessary for Star Wars saga ships to travel a certain distance in Mega Lights.",
    dateBegin: "2021",
    dateEnd: "2021",
    website: "https://github.com/titi-co/MGLT-Calculator",
    platform: "Web",
    stack: "React, Redux",
    images: ["mglt-app.png"],
    video: "",
    href: "mglt-calculator",
  },
  {
    id: "2",
    cover: "discord-cover.png",
    name: "DJ Titico Music Bot",
    description:
      "A discord music bot developed to be the main bot for our discord friends server.",
    dateBegin: "2022",
    dateEnd: "",
    website: "https://github.com/titi-co/dj-titico-v2",
    platform: "Windows/macOS/Linux/iOS/Android/Web",
    stack: "NodeJS, Discord API",
    images: [],
    video: "",
    href: "dj-titico",
  },
  {
    id: "2",
    cover: "neural-cover.jpeg",
    name: "Neural Style Transfer",
    description:
      "A Neural Style Transfer developed during AI Classes at Computer Science - PUCMG.",
    dateBegin: "2022",
    dateEnd: "2022",
    website: "https://github.com/titi-co/NeuralStyleTransfer",
    platform: "Web/Colab/Windows/MacOs/Linux",
    stack: "Python, Keras",
    images: [],
    video: "",
    href: "neural-style-transfer",
  },
];

export const collaborations = [
  {
    id: "1",
    cover: "wetask-cover.png",
    name: "WeTask",
    description: "Worked as a developer on the WeTask app for Android and IOS.",
    dateBegin: "2021",
    dateEnd: "",
    website: "https://wetask.com.br/",
    platform: "Android, IOS",
    stack: "Flutter, NodeJS",
    images: [],
    video: "FCf4hT-JOrU",
    href: "we-task",
  },
];

export async function getWorkNameList() {
  return [
    {
      params: {
        work: "mglt-calculator",
      },
    },
    {
      params: {
        work: "dj-titico",
      },
    },
    {
      params: {
        work: "neural-style-transfer",
      },
    },
    {
      params: {
        work: "we-task",
      },
    },
  ];
}

export async function getWorkDetails(work) {
  const dataSet = {
    "mglt-calculator": projects[0],
    "dj-titico": projects[1],
    "neural-style-transfer": projects[2],
    "we-task": collaborations[0],
  };
  return dataSet[work];
}
