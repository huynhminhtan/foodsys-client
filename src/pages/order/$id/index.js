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
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
          <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
          <Descriptions.Item label="Order time">
            2018-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Usage Time" span={2}>
            2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={3}>
            <Badge status="processing" text="Running" />
          </Descriptions.Item>
          <Descriptions.Item label="Negotiated Amount">
            $80.00
          </Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official Receipts">
            $60.00
          </Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>

        <br />
        <br />
        <Descriptions title="Order Detail #1012" bordered size="middle" />
        <ListOrderDetail data={data} />
      </Page>
    )
  }
}

OrderDetail.propTypes = {
  userDetail: PropTypes.object,
}

export default OrderDetail
