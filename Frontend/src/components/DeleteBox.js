import '../styles/deletebox.css'

const DeleteBox = (props) => {

    return(
        <div className="delete-box">
            <div className="inner-wrapper">
                <p>{props.msg}</p>
                <ul className='no_bullets'>
                    <li>
                        <button className ="del_btn red" onClick={() => props.okhandler(props.data)}>Yes</button>
                    </li>
                    <li>
                        <button className ="del_btn green" onClick ={props.cancelhandler}>No</button>
                    </li>
                </ul>
            </div> 
        </div> 
    )
}

export default DeleteBox