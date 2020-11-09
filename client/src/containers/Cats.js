import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import data from '../main/cats.json'
// import { Acct, AcctMobile, Container, Div } from "../../../components";
// import { Account, Layout, MQ } from "../../../containers";
// import { API } from "../../../utils";

import './style.css';

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     allCats: [{
        _id: 1,
        name: 'f',
        color: '0'
      }],
      la_id: 4,
      la_name:'',
      la_color:'',
      editMode: false,
      addSuccessful: '',
      submitAttempted: false
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.componentDidMount = () => {
      this.getAllCats()
    }
  }

  dataHandler = () => {
    if(this.state.la_name && this.state.la_color) {
        let newCats = this.state.allCats;
        let arr = [];
        for(let i=0; i<newCats.length; i++) {
            console.log(newCats[i]._id)
            arr.push(newCats[i]._id)
        }
        let newCreatedId = Math.max(...arr) +1;
        const data = {
        _id: newCreatedId,
        name: this.state.la_name,
        color: this.state.la_color
        }
        this.setState({ submitAttempted: true, addSuccessful: true });
        this.submitHandler(data)
    } else {
        this.setState({submitAttempted: true, addSuccessful: false });
        console.log("you must supply both fields")
    }
  }

 submitHandler = (arg) => {  
   
        let newCats = this.state.allCats
        newCats.push(arg)
        this.setState({
            allCats: newCats
        })
        this.resetInputFields()
  
  }

  resetInputFields = () => {
    const mainInput = document.getElementsByClassName('del-input');
    for(let i=0; i<2;i++) {
        mainInput[i].value= ''
    } 
    this.resetSt()
  }

  resetSt = () => {
    this.setState({
      la_color: '',
      la_id: '',
      la_name:''
    })
  }

  getAllCats = () => {
    this.setState({
        allCats: data
    })
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  editCats = (e) =>  {
      
      let target=e.currentTarget.id;
    console.log('edit cats called...', e.currentTarget, e.currentTarget.id)
    this.setState({
        target: target,
        editMode: !this.state.editMode
    })
    console.log(this.state.editMode, this.state.target)
  }
  
  deleteListItem = (e) => {
    let t = e.currentTarget.id
    let myArray 
    let newCats = this.state.allCats;
    newCats = newCats.filter(function( obj ) {
        console.log(obj._id)
        console.log(parseInt(t))
        console.log(obj._id !== parseInt(t))
        return obj._id !== parseInt(t);
    });
    console.log(myArray)
    // console.log(e.target.value)
    // console.log(e.target.id)
    
    // newCats.splice(e.target.id, 1)
    this.setState({
        allCats: newCats
    })
  }
  render() {
    const table = this.state.allCats.map(el => (
            <tr key={el._id}>
                <div>
                    <td className="td-pic">#alt</td>
                    <td className="td-info">
                        <h3>This is {el.name}</h3>
                        <p> She is a purebred Brittish Shorthair. In this section, I will proceed to tell yo uabout the cats.</p>
                    </td>
                    <td className="td-btn">
                        <div>
                            {this.state.target != el._id ? 
                                <button id={el._id} onClick={this.editCats}><FontAwesomeIcon icon={faEdit} /> </button>
                            : <div></div>} 
                            <button id={el._id}  onClick={this.deleteListItem}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </div>
                    </td>
                    </div>
                {this.state.target == el._id? (
                <div>
                <p>Cat Name: </p>
                <p>Cat Description: </p>
                <p><button onClick={this.editCats}>Done Editing</button></p>
            </div> ) : <div></div>}
            </tr>
    ))
    const map = this.state.allCats.map(el => (
        <div key={el._id}>
            <p>_id: {el._id}</p>
            <p>name: {el.name}</p>
            <p>color: {el.color}</p>
            {/* <FontAwesomeIcon id={el._id}  onClick={this.deleteListItem} icon={faTrashAlt} /> */}
            {/* <button id={el._id}  onClick={this.deleteListItem}>Delete</button> */}
        </div>
      ))
    return (
        <div>
            
            
            <div className="addition-section">
                <div className="addition-inputs">
                    <input placeholder="Name" className='del-input' onChange={this.changeHandler} type='text'  name="la_name"/>
                    <input placeholder="Color" className='del-input' onChange={this.changeHandler} type='text'  name="la_color"/>
                </div>
                <div className="addition-section-btn">
                    <button type='reset' onClick={this.dataHandler}>Add</button>
                </div>
            {this.state.submitAttempted ? (
            this.state.addSuccessful ? (
                <div className='add-successful'>The cat was successfully Added !!</div>) : (
                <div className="add-unsuccessful">The cat was not added. Please provide a name as well as a description and resubmit.</div>)
            ): <div></div>}
            </div>
            <table>
                {table}
            </table>
           
            {/* <div>{map}</div> */}
        </div>
    );
  }
}

export default Cats;