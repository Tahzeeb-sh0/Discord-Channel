package com.yami.chat.yami.chat.controllers;

import com.yami.chat.yami.chat.entities.Message;
import com.yami.chat.yami.chat.payload.MessageRequest;
import com.yami.chat.yami.chat.services.ChatServices;
import com.yami.chat.yami.chat.services.RoomServices;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class ChatController {

    private final ChatServices chatServices;

    public ChatController(ChatServices chatServices) {
        this.chatServices = chatServices;
    }

    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/room/{roomId}")
    public Message sendMessage(@DestinationVariable String roomId, @RequestBody MessageRequest messageRequest){

        Message message = chatServices.sendMessage(roomId,messageRequest);

        return message;

    }
}
