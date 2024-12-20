import { useState } from 'react'
import { getBuildingsList } from '@/api/index.js'

const Buildings = (props) => {
  const [buildingsList, setBuildingsList] = useState([])
  const [buildingsId, setBuildingsId] = useState([])
  const onClick = (item) => {
    setBuildingsId(item.id)
    props.setBuildingsIdMethod(item.id)
  }

  useEffect(() => {
    const render = async () => {
      if (props.id !== '') {
        const res = await getBuildingsList(props.id)
        setBuildingsList(res.data)
        onClick(res.data[0])
      }
    }
    render()
  }, [props.id])

  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            /* 这里是你的组件 token */
          },
        },
      }}>
      <Card
        style={{
          maxWidth: '15%',
          flex: '1 1 0%',
          overflowY: 'auto',
          backgroundColor: '#F3F4F6',
        }}>
        <div>
          <div className='fa-75 text-base text-[#000000] font-600'>
            选择楼号
          </div>
          {buildingsList.map((item, index) => {
            return (
              <div
                key={index}
                className={`fa-55 text-base mt-3 cursor-pointer p-3 rounded-md ${buildingsId === item.id ? 'bg-[#165DFF] text-white' : ''}`}
                onClick={() => onClick(item)}>
                {item.name}
              </div>
            )
          })}
          <div></div>
        </div>
      </Card>
    </ConfigProvider>
  )
}

Buildings.propTypes = {
  id: PropTypes.string.isRequired,
  setBuildingsIdMethod: PropTypes.func.isRequired,
}

export default Buildings
