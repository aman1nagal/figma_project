import {React} from 'react'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import {RiDeleteBinLine} from 'react-icons/ri'
export default function Steps(props) {
    return (
        <div>
            <h4 className='heading_step'>STEP1</h4>
            <div className='invitual_step'>
            <div className='delete'>
                <h3 className='indinumber'>{props.step1}</h3>
                <div className='deletestep'>
                <RiDeleteBinLine className='deleteheight'/>
                <h5 className='colorofdelete'>Delete</h5>
                </div>
            </div>
            <div className="arrow">
                <BsArrowRightCircleFill className='arrow_height'/>
            
            </div>

            </div>
                <div className='invitual_step'>
            <div className='delete'>
                <h3 className='indinumber'>{props.step2}</h3>
                <div className='deletestep'>
                <RiDeleteBinLine className='deleteheight'/>
                <h5 className='colorofdelete'>Delete</h5>
                </div>
            </div>
            <div className="arrow">
                <BsArrowRightCircleFill className='arrow_height'/>
            </div>

            </div>
        </div>
    )
}