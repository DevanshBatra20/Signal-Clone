import { View, Text, StyleSheet } from "react-native";
import { ListItem, Avatar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const CustomListItem = ({ id, chatName, enterChat }) => {
  const db = getFirestore();
  const [chatMessages, setChatMessages] = useState([]);
  useEffect(() => {
    const orederedChatsRef = query(
      collection(db, "chats", id, "messages"),
      orderBy("timeStamp", "desc")
    );
    const unsubscribe = onSnapshot(orederedChatsRef, (snapshot) => {
      setChatMessages(snapshot.docs.map((doc) => doc.data()));
    });

    return unsubscribe;
  }, [chatMessages]);

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        size={"lg"}
        source={{
          uri:
            chatMessages?.[0]?.photoURL ||
            "https://cdn.icon-icons.com/icons2/3297/PNG/512/user_profile_icon_208590.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
