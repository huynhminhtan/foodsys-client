import React, { PureComponent } from 'react'
import { List, Card } from 'antd'

const { Meta } = Card

class ListOrderDetail extends PureComponent {
  render() {
    const { data } = this.props

    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            {/*<Card title={item.title}>Card content</Card>*/}

            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Europe Street beat" />
              <br />
              <span>dfdfdfdf</span>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

export default ListOrderDetail
