import './App.css';
import Gallery from './component/gallery/Gallery';
import Modal from './component/modal/Modal';
import { useSelector } from 'react-redux';

function App() {
    const showModal = useSelector((state) => state.toggle.toggleModal);
    return (
        <div>
            {showModal && <Modal />}
            <Gallery />
        </div>
    );
}

export default App;
