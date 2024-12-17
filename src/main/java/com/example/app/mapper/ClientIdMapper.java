package com.example.app.mapper;

import com.example.app.model.entity.ClientReserveInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface ClientIdMapper {

    /**
     * 根据房间id获取客户预留信息
     *
     * @param id
     * @return
     */
    List<ClientReserveInfo> getClientReserveInfo(String id);

}
