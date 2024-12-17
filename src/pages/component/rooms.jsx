import { getFloor } from '@/api/index.js'
import { useEffect, useState } from 'react'
import ModalFC from './modal.jsx'

const Rooms = (props) => {
  const [floorList, setFloorList] = useState([])
  const [thisYearNumber, setThisYearNumber] = useState(0)
  const [nextYearNumber, setNextYearNumber] = useState(0)
  const [afterYearNumber, setAfterYearNumber] = useState(0)
  const [moreYearNumber, setMoreYearNumber] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [roomId, setRoomId] = useState('')
  const [loading, setLoading] = useState(false)
  const roomListRef = useRef(null)
  // 状态列表
  const statusList = [
    {
      color: '#DCDCDC',
      value: '空闲',
      key: '空置',
    },
    {
      color: '#3ca4e5',
      value: '自用',
      key: '自用',
    },
    {
      color: '#af83e9',
      value: '签约中',
      key: '签约中',
    },
    {
      color: '#FFD755',
      value: '预留',
      key: '预留',
    },
    {
      color: '#FFBA7A',
      value: '预定',
      key: '预订',
    },
    {
      color: '#f09595',
      value: '即将到期/超期',
      key: '超期',
    },

    {
      color: '#71d4aa',
      value: dayjs().format('YYYY'),
      number: thisYearNumber,
      key: 'thisYearNumber',
    },
    {
      color: '#50B5B4',
      value: dayjs().add(1, 'year').format('YYYY'),
      number: nextYearNumber,
      key: 'nextYearNumber',
    },
    {
      color: '#A4E185',
      value: dayjs().add(2, 'year').format('YYYY'),
      number: afterYearNumber,
      key: 'afterYearNumber',
    },
    {
      color: '#93ADFF',
      value: dayjs().add(3, 'year').format('YYYY') + '+',
      number: moreYearNumber,
      key: 'moreYearNumber',
    },
  ]

  // 获取颜色
  const getBGI = (item) => {
    if (!item.endTime) {
      return statusList.find((i) => item.status === i.key)
    }

    const endYear = dayjs(item.endTime).format('YYYY')
    const isExpiringSoon = dayjs(item.endTime).diff(dayjs(), 'month') <= 1

    if (isExpiringSoon) {
      return statusList.find((i) => i.key === '超期')
    }

    const yearKeyMap = {
      [dayjs().format('YYYY')]: 'thisYearNumber',
      [dayjs().add(1, 'year').format('YYYY')]: 'nextYearNumber',
      [dayjs().add(2, 'year').format('YYYY')]: 'afterYearNumber',
      [dayjs().add(3, 'year').format('YYYY')]: 'moreYearNumber',
    }

    const key = yearKeyMap[endYear] || ''
    return statusList.find((i) => i.key === key)
  }

  // 点击房间
  const clickRoom = (item) => {
    setShowModal(true)
    setRoomId(item.id)
  }

  // 计算租约到期年度的房间数量
  const calculateYearCounts = (rooms) => {
    const currentYear = dayjs().format('YYYY')
    const nextYear = dayjs().add(1, 'year').format('YYYY')
    const afterYear = dayjs().add(2, 'year').format('YYYY')
    const moreYear = dayjs().add(3, 'year').format('YYYY')

    return rooms.reduce(
      (acc, item) => {
        if (item.endTime) {
          const year = dayjs(item.endTime).format('YYYY')
          if (year === currentYear) acc.thisYear += 1
          else if (year === nextYear) acc.nextYear += 1
          else if (year === afterYear) acc.afterYear += 1
          else if (year >= moreYear) acc.moreYear += 1
        }
        return acc
      },
      { thisYear: 0, nextYear: 0, afterYear: 0, moreYear: 0 },
    )
  }

  useEffect(() => {
    const render = async () => {
      setLoading(true)
      if (props.id) {
        const res = await getFloor(props.id)
        setFloorList(res.data)

        const rooms = res.data.flatMap((item) => item.roomInfos) // 使用 flatMap 提取房间信息
        const { thisYear, nextYear, afterYear, moreYear } =
          calculateYearCounts(rooms)
        setThisYearNumber(thisYear)
        setNextYearNumber(nextYear)
        setAfterYearNumber(afterYear)
        setMoreYearNumber(moreYear)
        roomListRef.current.scrollTop = 0
        props.setLoading(false)
        setLoading(false)
      }
    }
    render()
  }, [props.id])

  return (
    <div className='mt-6 min-h-[0px] flex-1 h-full flex flex-col'>
      <div className='flex justify-end pr-6'>
        {statusList.map((item, index) => {
          return (
            <div className='flex  items-center ml-8' key={index}>
              <div
                className={`w-16px h-16px  rounded-[4px] border`}
                style={{ backgroundColor: item.color }}></div>
              <div className='fa-75 text-base ml-2 font-600 flex justify-center items-center'>
                <span>{item.value}</span>
                {index >= 6 ? (
                  <span className='ml-1'>{`(${item.number})`}</span>
                ) : (
                  ''
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className='flex-1 overflow-y-auto mt-[10px]' ref={roomListRef}>
        <Spin type='small' spinning={loading}>
          {floorList.map((item, index) => {
            return (
              <div key={index}>
                <Divider dashed style={{ borderColor: '#DCDCDC' }}></Divider>
                <div className='flex pl-[20px] fa-75' key={index}>
                  <div className='p-[10px] box-border mt-[15px] w-[100px]'>
                    <div className='text-[20px] font-600'>{item.floorName}</div>
                    <div className='text-[16px]'>{item.floorArea}m²</div>
                  </div>
                  <div className=' flex-1 flex flex-wrap ml-[50px]'>
                    {item.roomInfos.map((item, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            marginTop: index >= 5 ? '10px' : '15px',
                            backgroundColor: getBGI(item).color,
                          }}
                          onClick={() => clickRoom(item)}
                          className={`ml-[20px] pos-relative cursor-pointer  w-[200px] h-[103px] border bg-[#6B7280] text-black px-[15px] py-[10px] box-border rounded-[10px]`}>
                          <div className='text-[16px] truncate'>
                            {item.roomNumber}
                          </div>
                          <div className='text-[12px] mt-[5px]'>
                            {item.clientName}
                          </div>
                          <div className='text-[12px] mt-[5px]'>
                            {item.area}m²
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </Spin>
      </div>

      <ModalFC
        id={roomId}
        showModal={showModal}
        setShowModalFC={(bool) => {
          setShowModal(bool)
        }}></ModalFC>
    </div>
  )
}

Rooms.propTypes = {
  id: PropTypes.string.isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default Rooms
