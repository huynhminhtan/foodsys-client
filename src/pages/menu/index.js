import React from 'react'
import { Page } from 'components'
import styles from './index.less'
import {
  PageHeader,
  Menu,
  Dropdown,
  Button,
  Icon,
  Tag,
  Typography,
  Row,
  Col,
  Card,
  List,
} from 'antd'
// import Star from 'antd/icons/Star';
import {
  HeartTwoTone,
  SmileTwoTone,
  EditTwoTone,
  DeleteTwoTone,
  PlusOutlined,
} from '@ant-design/icons'

import { Collapse, Select } from 'antd'
import data from './datasource'

const { Paragraph } = Typography
const { Panel } = Collapse
const { Meta } = Card

const btnStyle = {
  marginLeft: 5,
}

const genExtra = () => (
  <div>
    <Button icon={<EditTwoTone />} size="small" />
    <Button style={btnStyle} icon={<DeleteTwoTone />} size="small" />
  </div>
)

class MenuPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  callback = key => {
    console.log(key)
  }

  render() {
    const nullData = {}

    const Content = ({ children, extraContent }) => {
      return (
        <Row className="content" type="flex">
          <div className="main" style={{ flex: 1 }}>
            {children}
          </div>
          <div
            className="extra"
            style={{
              marginLeft: 80,
            }}
          >
            {extraContent}
          </div>
        </Row>
      )
    }

    const content = (
      <div className="content">
        <h2>Menu</h2>
        <Paragraph>
          Each category we have its own story, adding food to the menu.
        </Paragraph>

        <Row className="contentLink" type="flex">
          {/* <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
      /> */}
          <Button type="primary">Add Category</Button>
        </Row>
      </div>
    )

    const btnstyle = {
      width: 100,
    }
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
    return (
      <div>
        <Card bordered={false}>
          <Content
            extraContent={
              <img
                src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
                alt="content"
              />
            }
          >
            {content}
          </Content>
        </Card>

        <Card bordered={false}>
          <Collapse defaultActiveKey={['1']} onChange={this.callback}>
            <Panel header="Điểm tâm sáng" key="1" extra={genExtra()}>
              <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={[...data, nullData]}
                renderItem={item => {
                  if (item && item.name) {
                    return (
                      <List.Item>
                        <Card
                          hoverable
                          style={{ width: 240 }}
                          cover={<img alt={item.name} src={item.imageUrl} />}
                          actions={[
                            <a key="edit">Edit</a>,
                            <a key="remove">Remove</a>,
                          ]}
                        >
                          <Meta
                            title={item.name}
                            description={item.description}
                          />
                          <br />
                          <p className={styles.cardPtag}>
                            <span>Price: </span>
                            {item.price}đ
                          </p>
                        </Card>
                      </List.Item>
                    )
                  }

                  return (
                    <List.Item>
                      <Button type="dashed" className={styles.btnCard}>
                        <PlusOutlined /> Add
                      </Button>
                      {/*<Card*/}
                      {/*  hoverable*/}
                      {/*  style={{width: 240}}*/}
                      {/*  cover={<img alt={item.name} src={item.imageUrl}/>}*/}
                      {/*>*/}
                      {/*  <Meta title={item.name} description={item.description}/>*/}
                      {/*  <br/>*/}
                      {/*  <p className={styles.cardPtag}>*/}
                      {/*    <span>Prixxxxxce: </span>*/}
                      {/*    {item.price}đ*/}
                      {/*  </p>*/}
                      {/*</Card>*/}
                    </List.Item>
                  )
                }}
              />
            </Panel>
            <Panel header="Món nước" key="2" extra={genExtra()}>
              <div>{text}</div>
            </Panel>
            <Panel header="Thức uống" key="3" extra={genExtra()}>
              <div>{text}</div>
            </Panel>
          </Collapse>
        </Card>
      </div>
    )
  }
}

export default MenuPage
