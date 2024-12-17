package com.example.app.mapper;

import com.example.app.model.entity.AgreementInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface AgreementMapper {
    /**
     * 根据房间id获取合同的信息
     *
     * @param roomId
     * @return
     */
    List<AgreementInfo> getAgreementInfo(String roomId);

    /**
     * 根据房间id获取房间的到期时间和状态(房间状态为已签约和合同状态生效)
     *
     * @param roomId
     * @return
     */
    String getRoomEndTime(String roomId);

    /**
     * 获取房间状态
     *
     * @param id
     * @return
     */
    String getRoomStatus(String id);
}
