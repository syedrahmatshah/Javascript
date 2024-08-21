/** @format */

// 11.23 map()
// The JavaScript array map() method calls the specified function for every array element and returns the new array.
// This method doesn't change the original array.

// let arr = [20, 30, 35];
// let result = arr.map((x) => {
//   return x * 10;
// });
// console.log(result);

// let arr1 = [2.1, 3.5, 4.7];
// let result1 = arr.map(Math.round);
// console.log(result1);

const chatConversations = [
  {
    username: "JohnDoe",
    lastMessage: "Sure, let's meet at 5 PM.",
    lastMessageUpdatedAt: "2024-08-17T15:45:00Z",
    userStatus: "sender",
    conversation: [
      {
        from: "JohnDoe",
        message: "Hey, are you free today?",
        timestamp: "2024-08-17T14:30:00Z",
      },
      {
        from: "JaneSmith",
        message: "Yes, I am. What's up?",
        timestamp: "2024-08-17T14:35:00Z",
      },
      {
        from: "JohnDoe",
        message: "I was thinking we could grab coffee.",
        timestamp: "2024-08-17T15:00:00Z",
      },
      {
        from: "JaneSmith",
        message: "That sounds great! What time?",
        timestamp: "2024-08-17T15:10:00Z",
      },
      {
        from: "JohnDoe",
        message: "Sure, let's meet at 5 PM.",
        timestamp: "2024-08-17T15:45:00Z",
      },
    ],
  },
  {
    username: "JaneSmith",
    lastMessage: "Okay, see you then!",
    lastMessageUpdatedAt: "2024-08-17T16:00:00Z",
    userStatus: "receiver",
    conversation: [
      {
        from: "JaneSmith",
        message: "I'm heading out now.",
        timestamp: "2024-08-18T15:50:00Z",
      },
      {
        from: "JohnDoe",
        message: "Great! I'll be there in 15 minutes.",
        timestamp: "2024-08-18T15:55:00Z",
      },
      {
        from: "JaneSmith",
        message: "Okay, see you then!",
        timestamp: "2024-08-19T16:00:00Z",
      },
    ],
  },
  {
    username: "MarkTaylor",
    lastMessage: "I'll send you the files by tomorrow.",
    lastMessageUpdatedAt: "2024-08-17T12:20:00Z",
    userStatus: "sender",
    conversation: [
      {
        from: "MarkTaylor",
        message: "Hey, I need those documents ASAP.",
        timestamp: "2024-08-20T11:00:00Z",
      },
      {
        from: "JohnDoe",
        message: "I’m working on them right now.",
        timestamp: "2024-08-20T11:30:00Z",
      },
      {
        from: "MarkTaylor",
        message: "Thanks, appreciate it.",
        timestamp: "2024-08-20T11:45:00Z",
      },
      {
        from: "JohnDoe",
        message: "No problem, I’ll get them to you by the end of the day.",
        timestamp: "2024-08-20T12:00:00Z",
      },
      {
        from: "MarkTaylor",
        message: "I'll send you the files by tomorrow.",
        timestamp: "2024-08-20T12:20:00Z",
      },
    ],
  },
  {
    username: "EmilyBrown",
    lastMessage: "Don't forget to bring the reports!",
    lastMessageUpdatedAt: "2024-08-21T10:30:00Z",
    userStatus: "receiver",
    conversation: [
      {
        from: "EmilyBrown",
        message: "Are you ready for the meeting?",
        timestamp: "2024-08-21T09:50:00Z",
      },
      {
        from: "JohnDoe",
        message: "Almost, just finishing up some details.",
        timestamp: "2024-08-21T10:00:00Z",
      },
      {
        from: "EmilyBrown",
        message: "Great, see you in 30 minutes.",
        timestamp: "2024-08-21T10:10:00Z",
      },
      {
        from: "JohnDoe",
        message: "I'll be there.",
        timestamp: "2024-08-21T10:20:00Z",
      },
      {
        from: "EmilyBrown",
        message: "Don't forget to bring the reports!",
        timestamp: "2024-08-21T10:30:00Z",
      },
    ],
  },
];
function groupConversationsByDate(chatConversations) {
  return chatConversations.map((conversationObj) => {
    const groupedConversation = {};

    conversationObj.conversation.forEach((messageObj) => {
      const date = messageObj.timestamp.split("T")[0]; // Extracting the date part (YYYY-MM-DD)

      if (!groupedConversation[date]) {
        groupedConversation[date] = [];
      }

      groupedConversation[date].push({
        from: messageObj.from,
        message: messageObj.message,
        timestamp: messageObj.timestamp,
      });
    });

    return {
      ...conversationObj,
      conversation: groupedConversation,
    };
  });
}

const groupedChatConversations = groupConversationsByDate(chatConversations);
console.log(groupedChatConversations);

// const groupedConversations = chatConversations.map((conversation) => {
//   const groupedByDate = conversation.conversation.reduce((group, message) => {
//     // Extract the date portion of the timestamp
//     const date = message.timestamp.split("T")[0];

//     if (!group[date]) {
//       group[date] = [];
//     }

//     group[date].push(message);

//     return group;
//   }, {});

//   return {
//     ...conversation,
//     conversation: groupedByDate,
//   };
// });

// console.log(groupedConversations);
