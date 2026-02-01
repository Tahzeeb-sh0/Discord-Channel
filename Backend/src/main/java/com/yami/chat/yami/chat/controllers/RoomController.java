package com.yami.chat.yami.chat.controllers;
import com.yami.chat.yami.chat.entities.Message;
import com.yami.chat.yami.chat.services.RoomServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    private RoomServices roomServices;

    public RoomController(RoomServices roomServices) {
        this.roomServices = roomServices;
    }

    @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody String roomId){
        ResponseEntity<?> room = roomServices.createRoom(roomId);
        return ResponseEntity.status(HttpStatus.CREATED).body(room);
    }


    @GetMapping("/{roomId}")
    public ResponseEntity<?> getRoom(@PathVariable String roomId){

        Object room = roomServices.getRoom(roomId);
        return ResponseEntity.ok(room);
    }

    @GetMapping("/{roomId}/messages")
    public ResponseEntity<List<Message>> getMessages(@PathVariable String roomId){

        List<Message> messages = roomServices.getMessages(roomId);

        return ResponseEntity.ok(messages);

    }

}
