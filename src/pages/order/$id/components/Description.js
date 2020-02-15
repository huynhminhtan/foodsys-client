import React, { PureComponent } from 'react'
import { Descriptions, Badge } from 'antd'
import moment from 'moment'
import { formatter } from '../../../../utils/common'

class Description extends PureComponent {
  render() {
    const { data } = this.props

    const title = 'Order Info #' + data.id

    return (
      <Descriptions title={title} bordered size="middle">
        <Descriptions.Item label="Receiver Name">
          {data.receiverName}
        </Descriptions.Item>
        <Descriptions.Item label="Receiver Phone">
          {data.receiverPhone}
        </Descriptions.Item>
        <Descriptions.Item label="Messenger ID">
          {data.userId}
        </Descriptions.Item>
        <Descriptions.Item label="Delivery Located" span={3}>
          {data.deliveryLocated}
        </Descriptions.Item>
        <Descriptions.Item label="Order time">
          {moment(parseInt(data.orderTime)).format('DD/MM/YYYY HH:mm')}
        </Descriptions.Item>
        <Descriptions.Item label="Delivery Time	" span={2}>
          {moment(parseInt(data.deliveryTime)).format('DD/MM/YYYY HH:mm')}
        </Descriptions.Item>
        <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text={data.status} />
        </Descriptions.Item>

        <Descriptions.Item label="Price">
          {formatter(data.totalPrice)}
        </Descriptions.Item>
        <Descriptions.Item label="Shipping fee">
          {formatter(data.fee)}
        </Descriptions.Item>
        <Descriptions.Item label="Discount">
          {formatter(data.discount)}
        </Descriptions.Item>

        <Descriptions.Item label="Official price">
          {formatter(data.totalPrice - data.fee - data.discount)}
        </Descriptions.Item>
        {/*<Descriptions.Item label="Negotiated Amount">*/}
        {/*  65.000đ*/}
        {/*</Descriptions.Item>*/}
        {/*<Descriptions.Item label="More options">*/}
        {/*  Có trẻ em*/}
        {/*  <br />*/}
        {/*  Có view gần cửa ra vào*/}
        {/*  <br />*/}
        {/*</Descriptions.Item>*/}
      </Descriptions>
    )
  }
}

export default Description
