import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from "react-router"
import { Container, List } from './listing.style'
import Pager from '../shared/pager'
import { preFetchProductsAction } from '../../redux/appActions'
import Loading from '../shared/loading'
import ProductListItem from './product-list-item'
import ThemeSelector from '../shared/themeSelector'
import Empty from './empty'

class ProductList extends Component {
    componentDidMount() {
        let currentPage = this.getCurrentPage()
        this.props.fetchProducts(currentPage)
    }

    onNext = (e) => {
        let currentPage = this.getCurrentPage()
        let page = ++currentPage
        this.loadPage(page)
    }

    onPrevious = (e) => {
        let currentPage = this.getCurrentPage()
        let page = currentPage > 1 ? --currentPage : 1
        this.loadPage(page)
    }

    loadPage = (page) => {
        const url = `/product-list/${page}`
        this.props.history.push(url)
        this.props.fetchProducts(page)
    }

    getCurrentPage = () => this.props.match.params.page ? +this.props.match.params.page : 1

    render() {
        const { isLoading, products } = this.props
        return (
            <Container>
                <List>
                    {
                        isLoading
                            ? <Loading />
                            : products && products.length > 0
                                ? [
                                    <ThemeSelector key='theme-selector' />,

                                    <ProductListItem key='header-row'
                                        isHeaderRow={true}
                                        product={products[0]} />,

                                    products.map(emp => <ProductListItem key={emp.productID} product={emp} />)
                                ]
                                :
                                <Empty />
                    }
                </List>
                <Pager onNext={this.onNext} onPrevious={this.onPrevious} />
            </Container>
        );
    }
}

ProductList.propTypes = {
    isLoading: PropTypes.bool,
    products: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        products: state.appReducer.products,
        isLoading: state.appReducer.isLoading
    }
}

const mapDispatchToProps = ({
    fetchProducts: preFetchProductsAction
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductList))