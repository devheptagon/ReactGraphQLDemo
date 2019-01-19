import Config from '../config/appConfig'
import axios from 'axios'

const Proxy = {    
    postData: function (page) {        
        return axios({
            url: Config.graphQLServerUrl,
            method: "POST",
            headers: { 'content-type': 'application/json' },
            responseType: 'json',                
            data: Proxy.buildQueryTemplate(page)
        })
        .then(response => (response.data))
        .catch(error => console.error(error))
    },
        
    buildQueryTemplate: function (page) {
        return { 
            query: `{ 
                viewer { 
                    productList(limit: ${Config.pageSize}, skip: ${(page - 1) * Config.pageSize}, sort: PRODUCTID_ASC) {
                        productID
                        name
                        unitPrice         
                }}}`
        }
    }    
}

export default Proxy