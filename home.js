import React from "react";
import axios from "axios";
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            productsLists:[]
        }
    }
    componentDidMount(){
        let xyz= this;
        axios.get('https://dummyjson.com/products?limit=10')
        .then(function (response) {
          // handle success
          xyz.setState({productsLists:response.data.products})
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    render(){
        console.log('-----rend----',this.state.productsLists);
        return(
            <>
            <div class="container">
        <div class="row">
        <div class="col-sm-8">
                <div class="content" id="page-content">
                    <div id="home-content">
                        <h2>Home Page</h2>
                        <p>Welcome to the home page of my website. This is some sample content.This contains <strong> Home Page</strong> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </>
        );
    }
}
export default Home;