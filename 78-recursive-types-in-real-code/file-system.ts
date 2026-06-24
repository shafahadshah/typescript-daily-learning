type FileNode = {
  name: string;
  children: FileNode[];
};

const root: FileNode = {
  name: "src",

  children: [
    {
      name: "components",
      children: [],
    },
    {
      name: "pages",
      children: [],
    },
  ],
};

console.log(root);