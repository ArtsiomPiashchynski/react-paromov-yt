/*
  Add/Update a field in an object
*/

const user_1 = {
  id: 1,
  name: "artsion",
  posts: [
    {
      title: "text",
    },
  ],
}

const user_1_copy = {
  ...user_1,
  name: "artsiom",
  status: "online",
  posts: [            // new link
    ...user_1.posts
  ],
}

const user_2_copy = {
  ...user_1,
  name: "artsiom",
  status: "online",
} // posts have old link



/*
  Delete a field in an object
*/

const user_2_withoutName = {
  ...user_2_copy,
}
delete user_2_withoutName.name;

//===

const { name: _, ...user_2_copy } = user_2_copy;

//===

const user_4 = {
  ...user_2_copy,
  name: undefined, // warning, doesn't work with iterations
}



/*
  Add an element to array
*/

const posts = [
  {
    id: 1,
    title: "React 1"
  },
  {
    id: 2,
    title: "React 2"
  },
  {
    id: 3,
    title: "React 3"
  },
  {
    id: 4,
    title: "React 4"
  },
]

const posts2 = [
  {
    id: 0,
    title: "React 0"
  },
  ...posts
];

//===

const posts3 = [
  ...posts,
  {
    id: 5,
    title: "React 5"
  },
];

//===

const posts4 = [
  ...posts.slice(0, 3),
  {
    id: 5,
    title: "React 5",
  },
  ...posts.slice(3),
];

const posts4_1 = posts4.slice();
posts4_1.splice(
  2,
  0,
  [{
    id: 5,
    title: "React 5",
  }]
);



/*
  Update an element in array
*/

const postsCopy = posts.slice();
postsCopy[5] = {...postsCopy[3], title: "React 4444"}

//===

const posts5 = posts.map((post) =>
  post.id === 3 ? {...post, title: "React 33333"} : post
);



/*
  Remove an element from array
*/

const posts6 = posts.slice();
posts6.splice(2, 1);

const posts7 = posts.filter((post) => post.id !== 1);
