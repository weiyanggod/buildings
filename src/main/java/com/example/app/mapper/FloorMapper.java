package com.example.app.mapper;
import com.example.app.model.entity.FloorInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface FloorMapper {
    List<FloorInfo> getBuildingsFloorInfo(String id);
}
