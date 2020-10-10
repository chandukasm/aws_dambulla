// import { object } from "joi";

// getUser(1)
//   .then(user => getRepositories(user.userName))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log("commits  :" + commits))
//   .catch(err => console.log(err.message));

// async function displayCommits() {
//   const user = getUser(1);
//   const repos = await getRepositories(user.userName);
//   const commits = await getCommits(repos[0]);
//   console.log(commits);
// }

// displayCommits();
// function getUser(id) {
//   //   return new Promise((resolve, reject) => {
//   //     setTimeout(() => {
//   console.log("getting the user...");
//   //       resolve({ id: id, userName: "chanduka" });
//   //     }, 2000);
//   //   });
//   return { id: id, userName: "chanduka" };
// }

// function getRepositories(userName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("getting the repos...");
//       resolve(["repo1", "repo2", "repo3"]);
//       //   reject(new Error("error occored"));
//     }, 2000);
//   });
// }

// function getCommits(repo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("getting the commits...");
//       resolve("repo1 commits are here");
//     }, 2000);
//   });
// }

// function queryEngnine(requestBody) {
//   const { first_name, last_name, pp_number, group_number, id } = requestBody;
//   const data = [first_name, last_name, pp_number, group_number, id];
//   var query = "update traveler set";
//   if (first_name != null) {
//     query += "first_name=$1 ";
//   }
//   if (last_name != null) {
//     query += "last_name=$2 ";
//   }
//   if (pp_number != null) {
//     query += "passport_number=$3 ";
//   }
//   if (group_number != null) {
//     query += "group_number=$4 ";
//   }

//   query += "where id = $5 ";

//   console.log(query);
// }
queryEngnine({
  first_name: "navindyaxyz",
  last_name: "fernandopulle"
});
