import React, { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
// import Emailer from 'smtp-emailer';
import { Ionicons } from '@expo/vector-icons';

const SendEmailScreen = ({ navigation }) => {
  const [sender, setSender] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [senderError, setSenderError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  const sendEmail = async () => {
    try {
      if (!sender.trim() || !subject.trim() || !body.trim()) {
        if (!sender.trim()) setSenderError(true);
        if (!subject.trim()) setSubjectError(true);
        if (!body.trim()) setBodyError(true);
        return;
      }

      const emailer = new Emailer({
        host: 'smtp.example.com',
        port: 465, 
        secure: true, 
        auth: {
          user: 'your_email@example.com', 
          pass: 'your_password' 
        }
      });

      await emailer.sendMail({
        from: 'your_email@example.com', 
        to: sender,
        subject: subject,
        text: body
      });

      Alert.alert("Success", "Email sent successfully.");
    } catch (error) {
      console.error("Error sending email:", error);
      Alert.alert("Error", error.message || "Failed to send email. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image
        style={styles.logo}
        source={{
          uri: "https://media.licdn.com/dms/image/D5612AQFoqQzDOOrOPg/article-cover_image-shrink_600_2000/0/1668548104191?e=2147483647&v=beta&t=q_nbDyHK9F1fRSdcaeBMas47L2xZd4T55ohhArbFakY",
        }}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Người Nhận</Text>
        <TextInput
          style={[styles.input, senderError && styles.errorInput]}
          placeholder="Nhập email người nhận..."
          onChangeText={(text) => {
            setSender(text);
            setSenderError(false);
          }}
          value={sender}
        />
        {senderError && <Text style={styles.errorText}>Vui lòng nhập email người nhận</Text>}
        <Text style={styles.label}>Tiêu Đề</Text>
        <TextInput
          style={[styles.input, subjectError && styles.errorInput]}
          placeholder="Nhập tiêu đề..."
          onChangeText={(text) => {
            setSubject(text);
            setSubjectError(false);
          }}
          value={subject}
        />
        {subjectError && <Text style={styles.errorText}>Vui lòng nhập tiêu đề</Text>}
        <Text style={styles.label}>Nội Dung</Text>
        <TextInput
          style={[styles.input, styles.bodyInput, bodyError && styles.errorInput]}
          placeholder="Nhập nội dung email..."
          onChangeText={(text) => {
            setBody(text);
            setBodyError(false);
          }}
          value={body}
          multiline
        />
        {bodyError && <Text style={styles.errorText}>Vui lòng nhập nội dung email</Text>}
      </View>
      <Button title="Gửi Email" onPress={sendEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  bodyInput: {
    height: 100,
    paddingTop: 10,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 5,
  },
});

export default SendEmailScreen;
