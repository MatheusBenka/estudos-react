import React, {Component} from 'react';
import API from '../../services/API';
import './styles.css';
export default class Product extends Component{
    state={
        product:{}
    }
    
    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await API.get(`/products/${id}`);
        this.setState({product:response.data});
    }


    render(){

        const {product} = this.state;        
        return <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>

                    <p>
                        Url : <a href={product.url}>{product.url}</a>
                    </p>
                </div>
        
        
    }
}