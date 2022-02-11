const UserList = [
    {
        id: 1,
        name: "name1",
        username: "username1",
        age: 20,
        nationality: "c1",
        friends: [
            {
                id: 2,
                name: "name2",
                username: "username2",
                age: 21,
                nationality: "c2"
            },
            {
                id: 5,
                name: "name5",
                username: "username5",
                age: 24,
                nationality: "c5"
            }
        ]
    },
    {
        id: 2,
        name: "name2",
        username: "username2",
        age: 21,
        nationality: "c2",
        friends: [
            {
                id: 5,
                name: "name5",
                username: "username5",
                age: 24,
                nationality: "c5"
            },
            {
                id:4,
                name: "name4",
                username: "username4",
                age: 23,
                nationality: "c4"
            },
        ]
    },
    {
        id: 3,
        name: "name3",
        username: "username3",
        age: 22,
        nationality: "c3"
    },
    {
        id: 4,
        name: "name4",
        username: "username4",
        age: 23,
        nationality: "c4"
    },
    {
        id: 5,
        name: "name5",
        username: "username5",
        age: 24,
        nationality: "c5"
    }
];


const MovieList = [
    {
        id: "m1",
        name: "name1",
        yearOfPublication: 2001,
        isInTheatres: true
    },
    {
        id: "m2",
        name: "name2",
        yearOfPublication: 2011,
        isInTheatres: false
    },
    {
        id: "m3",
        name: "name3",
        yearOfPublication: 2006,
        isInTheatres: true
    },
    {
        id: "m4",
        name: "name4",
        yearOfPublication: 2001,
        isInTheatres: true
    },
    {
        id: "m5",
        name: "name5",
        yearOfPublication: 2019,
        isInTheatres: false
    }
]

export {UserList, MovieList};
