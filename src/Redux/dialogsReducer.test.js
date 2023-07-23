import dialogsReducer, { actionsDialogs } from "./dialogsReducer"

let state = {
    messages: [
        { id: 1, message: "hello, how are you" },
        { id: 1, message: "Yo yo yo" },
        { id: 1, message: "lalalal lolo" },
      ],
}

it('length of messages before add new mess', () => {
    let action = actionsDialogs.sendMessage('hi its my first test');
    let newState = dialogsReducer(state, action);
    expect(newState.messages.length).toBe(4)
})