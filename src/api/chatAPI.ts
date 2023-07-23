import { ChatMessageType } from "../components/ChatPage/Message";

export type StatusType = 'pending' | 'ready' | 'error';

type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;

type EventsNamesTypes = 'message-received' | 'status-changed'

const subscribers = {
  'message-received': [] as MessagesReceivedSubscriberType[],
  'status-changed': [] as StatusChangedSubscriberType[]
} 

let ws: WebSocket | null = null;

const closeHandler = () => {
  notifySubscribersAboutStatus('pending')
  setTimeout(() => {
    createChannel();
  }, 3000);
};

const onHandleMessage = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers['message-received'].forEach(s => s(newMessages))
};

const onOpenHandler = () => {
  notifySubscribersAboutStatus('ready')
};

const onErrorHandler = () => {
  notifySubscribersAboutStatus('error')
};

const cleanUp = () => {
  ws?.removeEventListener("close", closeHandler);
  ws?.removeEventListener("message", onHandleMessage);
  ws?.removeEventListener("open", onOpenHandler);
  ws?.removeEventListener("error", onErrorHandler);
}

const notifySubscribersAboutStatus = (status: StatusType) => {
  subscribers['status-changed'].forEach(s => s(status))
}

const createChannel = () => {
  cleanUp()
  ws?.close();
  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  notifySubscribersAboutStatus('pending')
  ws.addEventListener("close", closeHandler);
  ws.addEventListener("message", onHandleMessage);
  ws.addEventListener("open", onOpenHandler);
  ws.addEventListener("error", onErrorHandler);
};

export const chatAPI = {
  start() {
    createChannel()
  },
  stop() {
    ws?.close()
    cleanUp()
    subscribers['message-received'] = []
    subscribers['status-changed'] = []
  },
  subscribe(eventName: EventsNamesTypes, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
    //@ts-ignore
    subscribers[eventName].push(callback);
    return () => {
      //@ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    }
  },
  unsubscribe(eventName: EventsNamesTypes, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
    //@ts-ignore
        subscribers[eventName] = subscribers[eventName].filter (s => s !== callback)
  },
  sendMessage(message: string) {
    ws?.send(message)
  }
};
