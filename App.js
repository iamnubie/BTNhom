// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>minh đẹp zai</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

// export default function App() {
//   const [mails, setMails] = useState([
//     { id: 1, sender: 'John Doe', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//     { id: 2, sender: 'Jane Smith', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//     // Thêm các email khác nếu cần
//   ]);

//   const deleteMail = (id) => {
//     setMails(mails.filter(mail => mail.id !== id));
//   };

//   const markMail = (id) => {
//     // Thực hiện đánh dấu email ở đây
//   };

//   const replyMail = (sender) => {
//     // Thực hiện trả lời email ở đây
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.headerButton} onPress={() => {/* Thực hiện xóa email */}}>
//           <Text>Xóa</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.headerButton} onPress={() => {/* Thực hiện đánh dấu email */}}>
//           <Text>Đánh dấu</Text>
//         </TouchableOpacity>
//       </View>
//       <ScrollView style={styles.mailContainer}>
//         {mails.map(mail => (
//           <View key={mail.id} style={styles.mailItem}>
//             <Text style={styles.sender}>{mail.sender}</Text>
//             <Text>{mail.content}</Text>
//             <TouchableOpacity style={styles.replyButton} onPress={() => replyMail(mail.sender)}>
//               <Text>Trả lời</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   headerButton: {
//     padding: 5,
//   },
//   mailContainer: {
//     flex: 1,
//   },
//   mailItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   sender: {
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   replyButton: {
//     alignSelf: 'flex-end',
//     marginTop: 5,
//     padding: 5,
//     backgroundColor: '#eee',
//   },
// });
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [email, setEmail] = useState({
    sender: 'Gordon Ramsay',
    subject: 'It is raw!!!',
    content: 'This is the worst dish I have ever tasted!',
    marked: false,
  });

  const markAsRead = () => {
    setEmail(prevState => ({
      ...prevState,
      marked: true,
    }));
  };

  const deleteEmail = () => {
    // Logic to delete email
  };

  const replyEmail = () => {
    // Logic to reply to email
  };

  const navigateBack = () => {
    // Logic to navigate back to main screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={markAsRead} style={styles.toolbarButton}>
          <Text>{email.marked ? 'Readed' : 'Mark as Read'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateBack} style={styles.toolbarButton}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteEmail} style={styles.toolbarButton}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.emailContainer}>
        <Text style={styles.sender}>{email.sender}</Text>
        <Text style={styles.subject}>{email.subject}</Text>
        <Text style={styles.content}>{email.content}</Text>
      </ScrollView>
      <TouchableOpacity onPress={replyEmail} style={styles.replyButton}>
        <Text>Reply</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
  },
  toolbarButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#DDDDDD',
  },
  emailContainer: {
    flex: 1,
  },
  sender: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subject: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
  replyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#DDDDDD',
  },
});
