//import { render } from '@testing-library/react';
import React, { Component } from 'react'
import './SearchStyle.css'
class Search extends Component
{
    state = {val: ''}
    onInputChange = (event) =>{
        this.setState({val: event.target.value})
    }
    onFormSubmit = (event) =>
    {
        event.preventDefault();
        //console.log(this.state.val); 
        this.props.userSubmit(this.state.val);
    }

    render()
    {
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className= "flexContainer">
                   <label htmlFor="search"><h2>Image Search</h2></label>
                    <input className="inputStyle" value={this.state.val} onChange={this.onInputChange} type="text"/>

                </form>

            </div>
        )
    }

}

export default Search;

