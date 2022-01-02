export default interface message {
  folder: string;
  body: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  senderName: senderName;
  corpus: string;
  _id: string;
}

interface senderName {
  last: string;
  first: string;
}
