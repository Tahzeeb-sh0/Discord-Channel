package com.yami.chat.yami.chat.services;

import com.yami.chat.yami.chat.entities.Message;
import com.yami.chat.yami.chat.entities.Room;
import com.yami.chat.yami.chat.repositories.RoomRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServices {

    private final RoomRepository roomRepository;
    public RoomServices(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public ResponseEntity<?> createRoom( String roomId){


        roomId = roomId.trim();

        if (roomRepository.findByRoomId(roomId) != null){
            throw new RuntimeException("Room already exists");
        }

        Room room = new Room();
        room.setRoomId(roomId);

        Room savedRoom = roomRepository.save(room);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedRoom);
    }


    public Room getRoom(String roomId){
        Room room = roomRepository.findByRoomId(roomId);

        if (room == null){
            throw new RuntimeException("Room does not exist");
        }

        return room;
    }



    public List<Message> getMessages(String roomId){

        Room room = roomRepository.findByRoomId(roomId);
        if (room == null){
            return null;
        }

        return  room.getMessages();


    }




}


