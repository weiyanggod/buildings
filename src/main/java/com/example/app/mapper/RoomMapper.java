package com.example.app.mapper;

import com.example.app.model.entity.RoomDetails;
import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface RoomMapper {

    RoomDetails getRoomInfoByRoomId(String roomId);

}
