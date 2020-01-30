import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Page } from 'components'
import styles from './index.less'
import { Descriptions, Badge } from 'antd'
import ListOrderDetail from './components/List'
import data from './datasource'

@connect(({ orderDetail }) => ({ orderDetail }))
class OrderDetail extends PureComponent {
  render() {
    // const { orderDetail } = this.props
    // const { data } = orderDetail
    // const content = []
    // for (let key in data) {
    //   if ({}.hasOwnProperty.call(data, key)) {
    //     content.push(
    //       <div key={key} className={styles.item}>
    //         <div>{key}</div>
    //         <div>{String(data[key])}</div>
    //       </div>
    //     )
    //   }
    // }

    return (
      <Page inner>
        {/*<div className={styles.content}>{content}</div>*/}
        <Descriptions title="Order Info #1012" bordered size="middle">
          <Descriptions.Item label="Receiver Name">Linh Đan</Descriptions.Item>
          <Descriptions.Item label="Receiver Phone">
            0888999898
          </Descriptions.Item>
          <Descriptions.Item label="Messenger Name">Đan Đan</Descriptions.Item>
          <Descriptions.Item label="Delivery Located" span={3}>
            Cây xăng Trung Thạnh, quận 7
          </Descriptions.Item>
          <Descriptions.Item label="Order time">
            2019-09-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Delivery Time	" span={2}>
            2019-09-24 18:10:00
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={3}>
            <Badge status="processing" text="DELIVERING" />
          </Descriptions.Item>
          <Descriptions.Item label="Official Receipts">
            65.000đ
          </Descriptions.Item>
          <Descriptions.Item label="Discount">0</Descriptions.Item>
          <Descriptions.Item label="Negotiated Amount">
            65.000đ
          </Descriptions.Item>
          {/*<Descriptions.Item label="More options">*/}
          {/*  Có trẻ em*/}
          {/*  <br />*/}
          {/*  Có view gần cửa ra vào*/}
          {/*  <br />*/}
          {/*</Descriptions.Item>*/}
        </Descriptions>

        <br />
        <br />
        <Descriptions title="Order Detail #1012" size="middle" />
        <ListOrderDetail data={data} />
      </Page>
    )
  }
}

OrderDetail.propTypes = {
  userDetail: PropTypes.object,
}

export default OrderDetail
