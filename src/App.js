import './App.css';
import { FaPlus ,FaSearch} from "react-icons/fa"
import {BsArrowRightCircleFill,BsArrowLeftCircleFill} from 'react-icons/bs'
import {RiDeleteBinLine} from 'react-icons/ri'
import Steps from './Steps';
import Steps1 from './Steps1';

function App() {
  return (
    <div className="App">
      <div className="header">
          <div className='header_main'>
          <input placeholder='Search' className='search' />
          { <FaSearch/>}
          </div>
          <div className='text'>
        <span className='addtask'>{<FaPlus/>} Add Task</span>
        </div>

      </div>
      <div className='steps'>
        <div className='first_step'>
        <Steps step1='1' step2='2'/>
        </div>
        <div className='second_step'>
        <Steps step1='3' step2='4'/>
        </div>
         <div className='third_step'>
        <Steps1 step1='5'/>
          </div>
        <div className='four_step'>
        <Steps step1='6' step2='7'/>
        </div>
      </div>
    </div>
  );
}

export default App;

