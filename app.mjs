// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "Yudhyasva",
  description: "Notes by Jaydipsinh Zala",
  panel: {
    tableOfContents: true,
    tags: true,
    customProperties: true,
    incomingLinks: false,
    outgoingLinks: false,
    externalLinks: false,
  },
  sidebar: {
    links: [
      {
        url: "https://www.linkedin.com/in/jaydipsinh-zala-a7b782217",
        label: "LinkedIn",
        icon: "linkedin",
      },
    ],
    sections: [
      {
        label: "Study",
        groups: [
          {
            label: "GATE",
            query: createNotesQuery({
              pattern: "^/GATE/",
            }),
          },
          {
            label: "BARC",
            query: createNotesQuery({
              pattern: "^/BARC/",
            }),
          },
        ],
      },
    ],
  },
});
