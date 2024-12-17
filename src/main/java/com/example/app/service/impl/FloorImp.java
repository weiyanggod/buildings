package com.example.app.service.impl;
import com.example.app.mapper.FloorMapper;
import com.example.app.model.entity.FloorInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FloorImp {

    @Autowired
    FloorMapper floorMapper;

    public List<FloorInfo> getBuildingsFloorInfo(String id) {
        return floorMapper.getBuildingsFloorInfo(id);
    }
}
