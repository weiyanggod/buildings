package com.example.app.mapper;

import com.example.app.model.entity.FloorInfo;
import com.example.app.model.vo.BuildingsOverviewVO;
import com.example.app.model.vo.BuildingsVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface BuildingsMapper {

    /**
     * 获取楼宇列表
     *
     * @param id
     * @return
     */
    List<BuildingsVO> getBuildingsList(String id);

    /**
     * 获取楼宇下楼层信息
     */
    List<FloorInfo> getBuildingsFloorInfoById(String id);

    BuildingsOverviewVO getBuildingsOverview(String id);
}
