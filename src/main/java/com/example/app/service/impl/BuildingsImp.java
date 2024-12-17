package com.example.app.service.impl;
import com.example.app.mapper.BuildingsMapper;
import com.example.app.mapper.RoomMapper;
import com.example.app.model.vo.BuildingsOverviewVO;
import com.example.app.model.vo.BuildingsVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
@Service
public class BuildingsImp {

    @Autowired
    private BuildingsMapper buildingsMapper;

    @Autowired
    private RoomMapper roomMapper;

    /**
     * 获取楼宇列表
     *
     * @param id
     * @return
     */
    public List<BuildingsVO> getBuildingsList(String id) {
        // 所属园区的楼宇列表
        List<BuildingsVO> buildingsVOList = buildingsMapper.getBuildingsList(id);
        buildingsVOList.sort(new Comparator<BuildingsVO>() {
            @Override
            public int compare(BuildingsVO a, BuildingsVO b) {
                // 提取楼号数字部分的正则表达式
                Pattern pattern = Pattern.compile("(\\d+)(号楼|幢)");
                Matcher matcherA = pattern.matcher(a.getName());
                Matcher matcherB = pattern.matcher(b.getName());

                // 如果包含 "号楼" 或 "幢"
                boolean isAHaoLou = matcherA.find() && matcherA.group(2).equals("号楼");
                boolean isBHaoLou = matcherB.find() && matcherB.group(2).equals("号楼");

                if (isAHaoLou && !isBHaoLou) {
                    return -1;
                } else if (!isAHaoLou && isBHaoLou) {
                    return 1;
                } else if (isAHaoLou && isBHaoLou) {
                    // 依据楼号数字进行排序
                    int numA = Integer.parseInt(matcherA.group(1));
                    int numB = Integer.parseInt(matcherB.group(1));
                    return Integer.compare(numA, numB);
                } else if (a.getName().contains("幢") && !b.getName().contains("幢")) {
                    return -1;
                } else if (!a.getName().contains("幢") && b.getName().contains("幢")) {
                    return 1;
                }
                return a.getName().compareTo(b.getName());
            }
        });
        return buildingsVOList;
    }

    /**
     * 获取楼宇信息总览
     *
     * @param id
     * @return
     */
    public BuildingsOverviewVO getBuildingsOverview(String id) {
        BuildingsOverviewVO buildingsOverview = buildingsMapper.getBuildingsOverview(id);
        Integer rentedArea = buildingsOverview.getRentedArea();
        Integer vacantArea = buildingsOverview.getVacantArea();
        if (rentedArea == null || rentedArea == 0) {
            buildingsOverview.setOccupancyRate("0%");
        } else if (vacantArea == null || vacantArea == 0) {
            buildingsOverview.setOccupancyRate("100%");
        } else {
            buildingsOverview.setOccupancyRate(rentedArea / buildingsOverview.getTotalArea() + "%");
        }
        return buildingsOverview;
    }
}
