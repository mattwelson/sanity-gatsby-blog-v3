export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605157312865e01939c5b1c8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-v-3-studio-1do8ghsg",
                  apiId: "f2eede5e-e890-42e1-840d-2d26d73a010d",
                },
                {
                  buildHookId: "60515731f8406d0f573034df",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-v-3-web",
                  apiId: "c7504686-bb3d-4a17-8ad4-ef53cd9ba691",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mattwelson/sanity-gatsby-blog-v3",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-v-3-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
