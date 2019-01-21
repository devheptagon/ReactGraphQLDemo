import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemField } from './listing.style'
import { formatMoney } from '../../utils/helper'
import { ThemeContext } from '../../theme/themes'

const formatFieldValue = (key, value) => key === 'unitPrice' ? formatMoney(value) : value

const ProductListItem = (props) => {
    const { product, isHeaderRow } = props
    return (
        <ThemeContext.Consumer>
            {
                ({ theme }) => <ListItem isHeaderRow={isHeaderRow} theme={theme}>
                    {
                        Object.keys(product).map(key =>
                            <ListItemField key={key}>
                                {isHeaderRow ? key : formatFieldValue(key, product[key])}
                            </ListItemField>)
                    }
                </ListItem>
            }
        </ThemeContext.Consumer>
    )
}

ProductListItem.propTypes = {
    product: PropTypes.object.isRequired,
    isHeaderRow: PropTypes.bool
}

export default ProductListItem