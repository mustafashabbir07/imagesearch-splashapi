import axios from 'axios';
import React from 'react';
import Search from './Search';
import  ImageList from './ImageList';
import './SearchStyle.css'

//
class App extends React.Component
{
    state = {images:[]}
   
  

    onSearchSubmit= async (term) =>
    {
        const response = await axios.get('https://api.unsplash.com/search/photos' ,{
            params: {query: term},
            headers:{
                Authorization: 'Client-ID 2gW2yPC2v5p-K-CFv2k0tYV0DuHPVxChcjVJ1NYpci4'
            }
        })

        this.setState({ images: response.data.results })
    }

    render()
    {
        return(
            <div>
                <Search userSubmit={this.onSearchSubmit} />
                <span className="found_span">Found: {this.state.images.length} images</span>
                <ImageList foundImages={this.state.images}/>
            </div>
        )
    }
    
}

export default App;