import {
  getRoomInfo,
  getAgreementInfo,
  getClientReserveInfo,
} from '@/api/index.js'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const ModalFC = (props) => {
  // 房间信息
  const [form] = Form.useForm()
  const [key, setKey] = useState()
  const [agreementList, setAgreementList] = useState()
  const [loading, setLoading] = useState(false)

  // 合同信息
  const agreementColumns = [
    {
      title: '合同编号',
      dataIndex: 'agreementNumber',
      key: 'agreementNumber',
    },
    {
      title: '客户名称',
      dataIndex: 'clientName',
      key: 'clientName',
    },
    {
      title: '合同状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '起租日期',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: '终租日期',
      dataIndex: 'endTime',
      key: 'endTime',
    },
  ]
  // 客户预留信息
  const [clientReserveList, setClientReserveList] = useState()
  const clientReserveColumns = [
    {
      title: '客户名称',
      dataIndex: 'clientName',
      key: 'clientName',
    },
    {
      title: '起租日期',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: '终租日期',
      dataIndex: 'endTime',
      key: 'endTime',
    },
    {
      title: '合同状态',
      dataIndex: 'status',
      key: 'status',
    },
  ]
  const render = async (key) => {
    let res = null
    if (key === '1') {
      res = await getRoomInfo(props.id)
      form.setFieldsValue(res.data)
    }
    if (key === '2') {
      res = await getAgreementInfo(props.id)
      setAgreementList(res.data)
    }
    if (key === '3') {
      res = await getClientReserveInfo(props.id)
      setClientReserveList(res.data)
    }
    setLoading(false)
  }

  useEffect(() => {
    setKey('1')
    onChange('1')
  }, [props.id])

  const onChange = (k) => {
    setKey(k)
    if (props.id) {
      render(k)
    }
    if (k === '2' || k === '3') {
      setLoading(true)
    }
  }
  const items = [
    {
      key: '1',
      label: '房间信息',
      children: (
        <Form
          form={form}
          layout='inline'
          labelAlign='right'
          colon={false}
          autoComplete='off'
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={form}
          variant='filled'
          disabled>
          <Space direction='vertical' size={10} style={{ width: '50%' }}>
            <Form.Item label='单元号' name='roomNumber'>
              <Input
                style={{
                  width: 240,
                }}
                value={form.roomNumber}
              />
            </Form.Item>

            <Form.Item label='所属楼宇' name='buildingsName'>
              <Input
                style={{
                  width: 240,
                }}
              />
            </Form.Item>
            <Form.Item label='使用状态' name='status'>
              <Input
                style={{
                  width: 240,
                }}
              />
            </Form.Item>
            <Form.Item label='装修情况' name='renovation'>
              <Input
                style={{
                  width: 240,
                }}
              />
            </Form.Item>
            <Form.Item label='层高' name='storeyHeight'>
              <div className='flex  items-center'>
                <Input
                  style={{
                    width: 240,
                  }}
                />
                <span className='ml-[5px]'>米</span>
              </div>
            </Form.Item>
            <Form.Item label='有无空调' name='airConditioning'>
              <Radio.Group>
                <Radio value='有'> 有 </Radio>
                <Radio value='无'> 无 </Radio>
              </Radio.Group>
            </Form.Item>
          </Space>
          <Space direction='vertical' size={10} style={{ width: '50%' }}>
            <Form.Item label='楼层号' name='floorId'>
              <Input
                style={{
                  width: 240,
                }}
              />
            </Form.Item>
            <Form.Item label='房间用途' name='roomPurpose'>
              <Input
                style={{
                  width: 240,
                }}
              />
            </Form.Item>
            <Form.Item label='管理面积' name='area'>
              <div className='flex items-center'>
                <Form.Item name='area' noStyle>
                  <Input style={{ width: 240 }} />
                </Form.Item>
                <span className='ml-[5px]'>m²</span>
              </div>
            </Form.Item>
            <Form.Item label='房间标准价' name='rentPrice'>
              <div className='flex  items-center'>
                <Form.Item name='area' noStyle>
                  <Input style={{ width: 240 }} />
                </Form.Item>
                <span className='ml-[5px]'>元/m²*月</span>
              </div>
            </Form.Item>
            <Form.Item label='物业费标准价' name='propertyFees'>
              <div className='flex  items-center'>
                <Form.Item name='area' noStyle>
                  <Input style={{ width: 240 }} />
                </Form.Item>
                <span className='ml-[5px]'>元/m²*月</span>
              </div>
            </Form.Item>
          </Space>
          <Space direction='vertical' style={{ width: '100%' }}>
            <Form.Item
              label='备注'
              name='remark'
              labelCol={{
                span: 3,
              }}
              wrapperCol={{
                span: 20,
              }}>
              <Input.TextArea
                style={{
                  width: 715,
                }}
              />
            </Form.Item>
          </Space>
        </Form>
      ),
    },
    {
      key: '2',
      label: '合同信息',
      children: (
        <Table
          loading={loading}
          rowKey={() => uuidv4()}
          dataSource={agreementList}
          columns={agreementColumns}
        />
      ),
    },
    {
      key: '3',
      label: '预定信息',
      children: (
        <Table
          loading={loading}
          rowKey={() => uuidv4()}
          dataSource={clientReserveList}
          columns={clientReserveColumns}
        />
      ),
    },
  ]
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            /* 这里是你的组件 token */
            headerBg: '#f2f6fc',
          },
        },
      }}>
      <Modal
        title='房源信息'
        width='1000px'
        open={props.showModal}
        onCancel={() => props.setShowModalFC(false)}
        footer={null}>
        <Tabs
          defaultActiveKey='1'
          items={items}
          activeKey={key}
          onChange={onChange}
        />
      </Modal>
    </ConfigProvider>
  )
}

ModalFC.propTypes = {
  id: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModalFC: PropTypes.func.isRequired,
}
export default ModalFC
