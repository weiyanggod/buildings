package com.example.app.service.impl;

import com.example.app.mapper.AgreementMapper;
import com.example.app.model.entity.AgreementInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AgreementImp {

    @Autowired
    AgreementMapper agreementMapper;

    /**
     * 根据房间号获取合同信息
     *
     * @param roomId
     * @return
     */
    public List<AgreementInfo> getAgreementInfo(String roomId) {
        return agreementMapper.getAgreementInfo(roomId);
    }

    /**
     * 根据房间id获取房间的到期时间(房间状态为已签约和合同状态生效)
     *
     * @param roomId
     * @return
     */
    public String getRoomEndTime(String roomId) {
        return agreementMapper.getRoomEndTime(roomId);
    }

    /**
     * 根据房间id获取房间的状态
     *
     * @param id
     * @return
     */
    public String getRoomStatus(String id) {
        return agreementMapper.getRoomStatus(id);
    }
}
