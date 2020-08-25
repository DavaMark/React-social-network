let state
    = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount:12},
            {id: 2, message: 'Its my first post', likesCount:20},

        ]
    },
    messagePage: {
        dialogsData: [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Vitaliy"},
            {id: 3, name: "Sergey"},
            {id: 4, name: "Dima"},
            {id: 5, name: "Danil"}
        ],

        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Bro? how are you"},
            {id: 3, message: "what's app?"},
            {id: 4, message: "Yo"},
            {id: 5, message: "You must see that!"}
        ]
    }

}

export default state;