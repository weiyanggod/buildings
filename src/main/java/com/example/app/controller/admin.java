package com.example.app.controller;

import com.example.app.config.Result;
import com.example.app.model.entity.*;
import com.example.app.model.vo.BuildingsOverviewVO;
import com.example.app.model.vo.BuildingsVO;
import com.example.app.service.impl.*;
import jakarta.websocket.server.PathParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = "*", allowCredentials = "true")
@Slf4j
@RestController
@RequestMapping("/api")
public class admin {
    @Autowired
    AgreementImp agreementImp;
    @Autowired
    private ParkImp parkImp;
    @Autowired
    private BuildingsImp buildingsImp;
    @Autowired
    private FloorImp floorImp;
    @Autowired
    private RoomImp roomImp;
    @Autowired
    private ClientImp clientImp;
    /**
     * 获取园区列表
     *
     * @return
     */
    @GetMapping("/getParkList")
    public Result<List<Park>> getParkList() {
        try {
            List<Park> parkList = parkImp.getParkList();
            return Result.success(parkList);
        } catch (Exception e) {
            return Result.error(e.toString());
        }
    }

    /**
     * 获取楼宇信息
     *
     * @param id
     * @return
     */
    @PostMapping("/buildingsList/{id}")
    public Result<List<BuildingsVO>> getBuildingsList(@PathVariable("id") String id) {
        try {
            List<BuildingsVO> buildingsList = buildingsImp.getBuildingsList(id);
            return Result.success(buildingsList);

        } catch (Exception e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 获取楼宇下房间信息总览
     *
     * @param id
     * @return
     */
    @PostMapping("/buildingsOverview/{id}")
    public Result<BuildingsOverviewVO> getBuildingsOverview(@PathVariable("id") String id) {
        try {
            BuildingsOverviewVO buildingsOverview = buildingsImp.getBuildingsOverview(id);
            return Result.success(buildingsOverview);
        } catch (Exception e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 楼层信息
     *
     * @param id
     * @return
     */
    @PostMapping("/buildingsFloor/{id}")
    public Result<List<FloorInfo>> getBuildingsFloorInfo(@PathVariable("id") String id) {
        try {
            List<FloorInfo> buildingsFloorInfo = floorImp.getBuildingsFloorInfo(id);
            return Result.success(buildingsFloorInfo);

        } catch (Exception e) {
            return Result.error(e.getMessage());
        }
    }
    /**
     * 根据房间id获取房间信息
     *
     * @param id
     * @return
     */
    @GetMapping("/roomInfo")
    public Result<RoomDetails> getRoomInfo(@PathParam("id") String id) {
        try {
            RoomDetails roomInfo = roomImp.getRoomListByFloorId(id);
            return Result.success(roomInfo);

        } catch (Exception e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 根据房间id获取合同信息
     *
     * @param id
     * @return
     */
    @GetMapping("/agreementInfo")
    public Result<List<AgreementInfo>> getAgreementInfo(@PathParam("id") String id) {
        try {
            List<AgreementInfo> agreementInfo = agreementImp.getAgreementInfo(id);
            return Result.success(agreementInfo);
        } catch (Exception e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 根据房间id获取客户预留信息
     *
     * @param id
     * @return
     */
    @GetMapping("/clientReserveInfo")
    public Result<List<ClientReserveInfo>> getClientReserveInfo(@PathParam("id") String id) {
        try {
            List<ClientReserveInfo> clientReserveInfo = clientImp.getClientReserveInfo(id);
            return Result.success(clientReserveInfo);

        } catch (Exception e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 根据房间id获取房间的到期时间(房间状态为已签约和合同状态生效)
     *
     * @param id
     * @return
     */
    @GetMapping("/roomEndTime")
    public Result<String> getRoomEndTime(@PathParam("id") String id) {
        try {
            String roomColor = agreementImp.getRoomEndTime(id);
            return Result.success(roomColor);
        } catch (Exception e) {
            return Result.error(e.getMessage());
        }

    }

    /**
     * 获取房间状态
     *
     * @param id
     * @return
     */
    @GetMapping("/roomStatus")
    public Result<String> getRoomStatus(@PathParam("id") String id) {
        try {
            String roomColor = agreementImp.getRoomStatus(id);
            return Result.success(roomColor);

        } catch (Exception e) {
            return Result.error(e.getMessage());
        }
    }

}
