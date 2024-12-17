package com.example.app.service.impl;

import com.example.app.mapper.ParkMapper;
import com.example.app.model.entity.Park;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ParkImp {
    @Autowired
    ParkMapper parkMapper;

    public List<Park> getParkList() {
        return parkMapper.getParkList();
    }
}
