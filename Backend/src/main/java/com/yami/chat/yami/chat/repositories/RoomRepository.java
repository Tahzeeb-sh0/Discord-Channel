package com.yami.chat.yami.chat.repositories;

import com.yami.chat.yami.chat.entities.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepository extends MongoRepository<Room, String> {
Room findByRoomId(String roomId);
}
