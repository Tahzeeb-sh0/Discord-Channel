package com.yami.chat.yami.chat.services;

import com.yami.chat.yami.chat.entities.Message;
import com.yami.chat.yami.chat.entities.Room;
import com.yami.chat.yami.chat.payload.MessageRequest;
import com.yami.chat.yami.chat.repositories.RoomRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ChatServices {
    private RoomRepository roomRepository;
    public ChatServices(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }
    public Message sendMessage(String roomId, MessageRequest messageRequest) {
        roomId = roomId.trim();
        Room room = roomRepository.findByRoomId(roomId);

        Message message = new Message();
        message.setContent(message.getContent());
        message.setSender(message.getSender());
        message.setTimeStamp(LocalDateTime.now());

        if (room != null) {
            room.getMessages().add(message);
            roomRepository.save(room);
        }else{
            throw new RuntimeException("Room Not Found");
        }

        return message;

    }
}
