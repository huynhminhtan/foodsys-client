import React, { PureComponent } from 'react'
import { List, Card } from 'antd'
import styles from './index.less'

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
              cover={<img alt={item.name} src={item.imageUrl} />}
            >
              <Meta title={item.name} />
              <br />
              <p className={styles.cardPtag}>
                <span>Price: </span>
                {item.price}đ
              </p>
              <p className={styles.cardPtag}>
                <span>Number: </span>
                {item.number}
              </p>
              <p className={styles.cardPtag}>
                <span>Options: </span>
                {item.option}
              </p>
              <p className={styles.cardPtag}>
                <span>Total price: </span>
                {item.totalPrice}đ
              </p>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

export default ListOrderDetail
