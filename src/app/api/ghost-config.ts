// import GhostContentAPI from "@tryghost/content-api";

// const ghostURL = process.env.GHOST_URL;
// const ghostKey = process.env.GHOST_KEY;

// if (!ghostURL || !ghostKey) {
//   console.error(
//     "GHOST_URL and GHOST_KEY environment variables must be defined."
//   );
//   process.exit(1);
// }

// const api = new GhostContentAPI({
//   url: ghostURL,
//   key: ghostKey,
//   version: "v5.0",
// });

// export async function getPosts() {
//   return await api.posts
//     .browse({
//       include: ["tags", "authors"],
//       limit: 10,
//     })
//     .catch((err) => {
//       throw new Error(err);
//     });
// }

// export async function getPost(slug: string) {
//   return await api.posts.read({ slug }).catch((err) => {
//     throw new Error(err);
//   });
// }
