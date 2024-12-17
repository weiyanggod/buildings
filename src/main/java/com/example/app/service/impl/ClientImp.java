package com.example.app.service.impl;
import com.example.app.mapper.ClientIdMapper;
import com.example.app.model.entity.ClientReserveInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClientImp {
    @Autowired
    ClientIdMapper clientIdMapper;

    /**
     * 根据房间id获取客户预留信息
     *
     * @param id
     * @return
     */
    public List<ClientReserveInfo> getClientReserveInfo(String id) {
        List<ClientReserveInfo> clientReserveInfo = clientIdMapper.getClientReserveInfo(id);
        System.out.println(clientReserveInfo);
        return clientReserveInfo;
    }
}
