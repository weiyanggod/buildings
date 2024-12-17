package com.example.app.mapper;
import com.example.app.model.entity.Park;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ParkMapper {

    List<Park> getParkList();

}
