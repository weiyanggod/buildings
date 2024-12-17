package com.example.app.service.impl;

import com.example.app.mapper.RoomMapper;
import com.example.app.model.entity.RoomDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class RoomImp {

    @Autowired
    private RoomMapper roomMapper;

    public RoomDetails getRoomListByFloorId(String roomId) {
        return roomMapper.getRoomInfoByRoomId(roomId);
    }
}
