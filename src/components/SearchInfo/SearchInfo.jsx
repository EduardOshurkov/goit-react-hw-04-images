






    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // import { Component } from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ImageGallery from "components/ImageGallery/ImageGallery";
// import Loader from "components/Loader/Loader";



// export default class SearchInfo extends Component {
//     state = {
//         request: '',
//         error: null,
//         status: 'idle',
//     }

//     componentDidUpdate(prevProps, _) {
//         const prevValue = prevProps.requestValue;
//         const nextValue = this.props.requestValue;
        
//         if (prevValue !== nextValue) {
//             this.setState({ status: 'pending'});
//             fetch(`https://pixabay.com/api/?q=${nextValue}&page=1&key=28129229-bb4cd1c73e2b9860b59b7f6a7&image_type=photo&orientation=horizontal&per_page=12`)
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json()
//                     }
//                     return Promise.reject(new Error(`Ошибка, нет результата`))
//                 })
//                 .then(request => this.setState({ request, status: 'resolved'}))
//                 .catch(error => this.setState({ error, status: 'rejected' }))
//         };
//     };


//     render() {
//         const { request, error, status } = this.state;

//         if (status === 'idle') {
//             return <div>Send search</div>
//         }

//         if (status === 'pending') {
//             return <Loader/>
//         }

//         if (status === 'rejected') {
//             return <h2>{error.message}</h2>
//         }

//         if (status === 'resolved') {
//             return (<ImageGallery request={request}/>
//             )
//         }
        
//     }
// }