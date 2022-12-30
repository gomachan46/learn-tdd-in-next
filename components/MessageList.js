export default function MessageList({data}) {
  return (
    <ul data-testid="messageList">
      {data.map(message => <li key={message}>{message}</li>)}
    </ul>
  );
}