import React, { PureComponent } from 'react'
import { List, Card } from 'antd'
import styles from './index.less'
import { formatter } from '../../../../utils/common'

const { Meta } = Card

class ListOrderDetail extends PureComponent {
  render() {
    const { ...tableProps } = this.props

    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        {...tableProps}
        renderItem={item => (
          <List.Item>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={item.name} src={item.imageUrl} />}
            >
              <Meta title={item.name} />
              <br />
              <p className={styles.cardPtag}>
                <span>Price: </span>
                {formatter(item.price)}
              </p>
              <p className={styles.cardPtag}>
                <span>Number: </span>
                {item.number}
              </p>
              <p className={styles.cardPtag}>
                <span>Options: </span>
                {item.moreOptions}
              </p>
              <p className={styles.cardPtag}>
                <span>Total price: </span>
                {formatter(item.price * item.number)}
              </p>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

export default ListOrderDetail
