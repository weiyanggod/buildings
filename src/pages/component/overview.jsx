import { useEffect, useState } from 'react'
import { getBuildingsOverviewInfo } from '@/api/index.js'
const Overview = (props) => {
  const [data, setDate] = useState({})

  const valueStyle = {
    fontFamily: 'AlibabaPuHuiTi-85',
    color: '#2563EB',
    fontSize: '20px',
    fontWeight: '600',
  }

  useEffect(() => {
    const render = async () => {
      if (props.id) {
        const res = await getBuildingsOverviewInfo(props.id)
        setDate(res.data)
      }
    }
    render()
  }, [props.id])

  return (
    <Card
      bordered={false}
      className='overviewCard'
      style={{ backgroundColor: '#F9FAFB', width: '100%' }}>
      <div className='flex justify-around'>
        <Statistic
          title='总面积'
          value={data.totalArea}
          precision={2}
          valueStyle={valueStyle}
          suffix='m²'
        />
        <Statistic
          title='房间数量'
          value={data.rooms || 0}
          valueStyle={valueStyle}
        />
        <Statistic
          title='管理面积'
          value={data.totalArea}
          precision={2}
          valueStyle={valueStyle}
          suffix='m²'
        />
        <Statistic
          title='已租面积'
          value={data.rentedArea}
          precision={2}
          valueStyle={valueStyle}
          suffix='m²'
        />
        <Statistic
          title='空置面积'
          value={data.vacantArea}
          precision={2}
          valueStyle={valueStyle}
          suffix='m²'
        />
        <Statistic
          title='客户数'
          value={data.customersNumber}
          valueStyle={valueStyle}
        />
        <Statistic
          title='出租率'
          value={(data.rentedArea / data.totalArea) * 100}
          precision={2}
          valueStyle={valueStyle}
          suffix='%'
        />
        <Statistic
          title='在租均价'
          value={data.averagePrice}
          precision={2}
          valueStyle={valueStyle}
        />
      </div>
    </Card>
  )
}

Overview.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Overview
