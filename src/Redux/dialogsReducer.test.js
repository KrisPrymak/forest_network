import dialogsReducer, { sendMessage } from "./dialogsReducer"

it('length of messages before add new mess', () => {
    let initialState = {
        messages: [
            { id: 1, message: "hello, how are you" },
            { id: 1, message: "Yo yo yo" },
            { id: 1, message: "lalalal lolo" },
          ],
    }
    let action = sendMessage('hi its my first test');
    let newState = dialogsReducer(initialState, action);
    expect(newState.messages.length).toBe(4)
})