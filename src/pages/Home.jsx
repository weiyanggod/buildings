import styled from 'styled-components'
import backgroundImageImg from '@/assets/img/背景.png'
import logoImg from '@/assets/img/logo.png'
import { getParkList, getToken } from '@/api/index.js'
import Buildings from './component/buildings.jsx'
import Overview from './component/overview.jsx'
import Rooms from './component/rooms.jsx'
import Cookies from 'js-cookie'
import { message } from 'antd'
const Home = () => {
  const [tabList, setTabList] = useState([])
  const [activeTabKey, setActiveTabKey] = useState()
  const [buildingsId, setBuildingsId] = useState('')
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(null)

  const onTabChange = (key) => {
    setLoading(true)
    setActiveTabKey(key)
  }

  const setBuildingsIdMethod = (id) => {
    setBuildingsId(id)
  }

  useEffect(() => {
    const render = async () => {
      // 如果登录了oa, 则获取token
      if (Cookies.get('avatarImageUrl')) {
        const token = await getToken({
          userName: 'PMT',
          password: 'b676a376-9be8-49d0-8eaa-d82f29a2832f',
        })
        if (token.code === 200) {
          setToken(token.data.id)
        } else {
          setToken(null)
        }
      } else {
        setToken(null)
        message.info('请先登录OA')
        return
      }

      const res = await getParkList()
      let temp = []
      res.data.forEach((item) => {
        temp.push({
          key: item.label,
          tab: item.value,
        })
      })
      setTabList(temp)
      setActiveTabKey(temp[0].key)
    }
    render()
  }, [])

  return (
    <div>
      {token && (
        <Page>
          <Title>
            <img src={logoImg} alt='' />
            <div>智慧产业创新园-楼宇剖面</div>
          </Title>
          <Card
            style={{
              width: '100%',
              flex: '1 1 0%',
              display: 'flex',
              flexDirection: 'column',
            }}
            className='parkCard flex-1'
            tabList={tabList}
            activeTabKey={activeTabKey}
            onTabChange={onTabChange}>
            <Spin spinning={loading}>
              <div className='flex max-h-[76vh]'>
                <Buildings
                  id={activeTabKey || ''}
                  setBuildingsIdMethod={setBuildingsIdMethod}></Buildings>
                <div className='ml-2 w-[85%]  flex flex-col flex-1'>
                  <Overview id={buildingsId}></Overview>
                  <Rooms
                    id={buildingsId}
                    setLoading={(bool) => {
                      setLoading(bool)
                    }}></Rooms>
                </div>
              </div>
            </Spin>
          </Card>
        </Page>
      )}
      {!token && <Page></Page>}
    </div>
  )
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 40px 32px 40px;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background-image: url(${backgroundImageImg});
  background-size: contain;
`

const Title = styled.div`
  height: 60px;
  display: flex;
  margin-bottom: 16px;
  img {
    width: 60px;
    height: 60px;
  }
  div {
    font-size: 30px;
    color: #fff;
    margin-top: 10px;
    font-family: 'AlibabaPuHuiTi-75';
    margin-left: 23px;
    letter-spacing: 3px;
  }
`

export default Home
