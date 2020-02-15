import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Page } from 'components'
import { Descriptions } from 'antd'
import ListOrderDetail from './components/List'
import Description from './components/Description'
import { withI18n } from '@lingui/react'

@withI18n()
@connect(({ orderDetail, loading }) => ({ orderDetail, loading }))
class OrderDetail extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props

    const { orderDetail } = this.props
    const { pageId } = orderDetail
    console.log('pageId: ' + parseInt(pageId))

    dispatch({
      type: 'orderDetail/queryOrder',
      payload: { id: parseInt(pageId) },
    })

    dispatch({
      type: 'orderDetail/queryOrderDetail',
      payload: { id: parseInt(pageId) },
    })
  }

  get listProps() {
    const { orderDetail, loading } = this.props
    const { detail } = orderDetail

    console.log('detail== ' + JSON.stringify(detail))
    return {
      dataSource: detail,
      loading: loading.effects['orderDetail/queryOrderDetail'],
    }
  }

  render() {
    const { orderDetail } = this.props
    const { order } = orderDetail
    const title = 'Order Detail #' + order.id

    return (
      <Page inner>
        <Description data={order} />
        <br />
        <br />

        <Descriptions title={title} size="middle" />
        <ListOrderDetail {...this.listProps} />
      </Page>
    )
  }
}

OrderDetail.propTypes = {
  userDetail: PropTypes.object,
}

export default OrderDetail
