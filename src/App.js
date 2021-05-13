import React, { Component } from 'react';
import Searchbar from './Components/Searchbar';
import API from './Services/API';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal';
import Button from './Components/Button';
import Loader from "react-loader-spinner";
import './App.css';

class App extends Component {
    state = {
        images: [],
        searchQuery: '',
        currentPage: 1,
        error: null,
        modalImage: '',
        showModal: false,
        isLoading: false,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImages();
        };
    };

    toggleModal = largeImageURL => {
        this.setState(({ showModal, modalImage }) => ({
            modalImage: !showModal ? largeImageURL : '',
            showModal: !showModal,
        }));
    };

    handleClick = e => {
        console.log(e.currentTarget);
    }
    
    onChangeQuery = query => {
        this.setState({
            images: [],
            searchQuery: query,
            currentPage: 1,
            error: null,
        })
    };

    fetchImages = () => {
        const { currentPage, searchQuery } = this.state;
        const options = { searchQuery, currentPage };
        
        this.setState({ isLoading: true });
        
        API.fetchImages(options)
            .then(images => {
                this.setState(prevState => ({
                    images: [...prevState.images, ...images],
                    currentPage: prevState.currentPage + 1,
                }));
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
        
        this.scrollImages();
    };

    scrollImages = () => {
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }, 500);
    };

    render() {
        const { images, modalImage, showModal, isLoading} = this.state;

        return (
            <div className='App'>
                <Searchbar onSubmit={this.onChangeQuery} />
                <ImageGallery images={images} onClick={this.toggleModal} />
                {
                    isLoading && <Loader className='loader' color="#303f9f" type="Circles" height={80} width={80}/>
                }
                {
                    images.length !== 0 && <Button onClick={this.fetchImages} />
                }
                {
                    showModal && <Modal modalImage={modalImage} onClose={this.toggleModal} />
                }
            </div>
        )
    };
};

export default App;