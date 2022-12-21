import profileReducer, { addPost } from "./profileReducer"


it('length of post should be correct', () => {
    let initialState = {
        posts: [
            { id: 3, message: "it is my first post", likesCount: 0 },
            { id: 2, message: "pumpimpampampimpum", likesCount: 120 },
            { id: 1, message: "lalolalolaolaod", likesCount: 10 },
          ]
    }
    let action = addPost('my second test')
    let newStateIni = profileReducer(initialState, action);
    expect(newStateIni.posts.length).toBe(4)
})
