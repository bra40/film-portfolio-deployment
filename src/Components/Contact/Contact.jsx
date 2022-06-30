import React, {useState} from 'react'
import './contact.scss';
import DirImg from "../../Images/ListIcons/filmDir.jpg"
import DevImg from "../../Images/ListIcons/webDev.jpg"
import HeyImg from "../../Images/ListIcons/sayHey.jpg"
import Modal from 'react-modal'
import FormCon from "./FormContainer/FormCon";
Modal.setAppElement('#root')

function Contact() {
    const [dirModalIsOpen, setDirModalIsOpen] = useState(false)
    
    
    const openModal = () => { 
      setDirModalIsOpen(true);
      document.body.style.overflow = 'hidden';
    }

    const closeModal = () => { 
      setDirModalIsOpen(false);
      document.body.style.overflow = 'unset';
}

  return (
    <div className="contactContainer">
        <div className="BackdropCo">
            <div className="HeadingCo"> Get In Touch </div>
            <div className='Message-con First-con'> To make an inquiry about a project, please select from the following options: </div>
            <br/>

<div className='List OneDir'>
    <button 
    onClick={openModal} 
    className='Option'
    >
        <div className='OptImg'> <img src={DirImg} alt='DirImg' className='ListImg'/> </div>
        <div className='OptPromt'> I want to work with you as a director. </div>
    </button>
</div>

<div className='List TwoDir'>
    <button onClick={openModal} className='Option'>
        <div className='OptImg'> <img src={DevImg} alt='DevImg' className='ListImg'/> </div>
        <div className='OptPromt'> I want to work with you as a developer. </div>
    </button>
</div>

<div className='List ThreeDir'>
    <button onClick={openModal} className='Option'>
        <div className='OptImg'> <img src={HeyImg} alt='HeyImg' className='ListImg'/> </div>
        <div className='OptPromt HelloOpt'> I just want to say hello. </div>
    </button>
</div>

<Modal isOpen={dirModalIsOpen} onRequestClose={() => closeModal()}

className="Modal"
overlayClassName="Overlay">

    <div className='formHeader'>

    </div>
    
    


    <div className='form-container-contact'>

          <FormCon className='formStyle' closeModal={closeModal} />

    </div>
    
  
          </Modal>
          
        </div> 
    </div>
  )
}

export default Contact