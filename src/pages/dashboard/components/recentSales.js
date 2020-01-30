import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Table, Tag } from 'antd'
import { Color } from 'utils'
import styles from './recentSales.less'

const status = {
  1: {
    color: Color.green,
    text: 'DELIVERING',
  },
  2: {
    color: Color.yellow,
    text: 'ORDERED',
  },
  3: {
    color: Color.red,
    text: 'TAX',
  },
  4: {
    color: Color.blue,
    text: 'COMPLETED',
  },
}

function RecentSales({ data }) {
  const columns = [
    {
      title: 'NAME',
      dataIndex: 'receiverName',
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      // render: text => <Tag color={status[text].color}>{status[text].text}</Tag>,
    },
    {
      title: 'Delivery Time',
      dataIndex: 'deliveryTime',
      render: text => moment(text).format('YYYY-MM-DD'),
    },
    {
      title: 'PRICE',
      dataIndex: 'totalPrice',
      // render: (text) => (
      //   <span style={{ color: status[text].color }}>{status[text].text}</span>
      // ),
    },
  ]
  return (
    <div className={styles.recentsales}>
      <Table
        pagination={false}
        columns={columns}
        rowKey={(record, key) => key}
        dataSource={data.filter((item, key) => key < 5)}
      />
    </div>
  )
}

RecentSales.propTypes = {
  data: PropTypes.array,
}

export default RecentSales
