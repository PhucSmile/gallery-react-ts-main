import { useSelector } from 'react-redux';
import './App.css';
import Gallery from './component/gallery/Gallery';
import Modal from './component/modal/Modal';

function App() {
  // Chỉ có 1 state đơn giản, cũng ko cần pass props nhiều tầng => nên dùng useState là đủ rồi, không cần làm store, cài thêm lib chi cho nặng code
  const showModal = useSelector((state) => state.toggle.toggleModal);
  return (
    <div>
      {showModal && <Modal />}
      <Gallery />
    </div>
  );
}

export default App;
