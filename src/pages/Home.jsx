import styled from 'styled-components'
import { Button, Space, DatePicker, version } from 'antd'
const DivStyle = styled.div`
  color: blue;
`

const Home = () => {
  return (
    <div className='text-red-5'>
      <h1>Home</h1>
      <DivStyle>Styled Component</DivStyle>
      <div style={{ padding: '0 24px' }}>
        <h1>antd version: {version}</h1>
        <Space>
          <DatePicker />
          <Button type='primary'>Primary Button</Button>
        </Space>
      </div>
    </div>
  )
}

export default Home
