import * as React from "react";
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
      la_color:''
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
        this.submitHandler(data)
    } else {
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

  
  deleteListItem = (e) => {
    let t = e.target.id
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
                <td className="td-pic">#alt</td>
                <td className="td-info">This cat's name is {el.name} She is a purebred Brittish Shorthair.</td>
                <td className="td-btn"><button>Edit</button></td>
            </tr>
    ))
    const map = this.state.allCats.map(el => (
        <div key={el._id}>
            <p>_id: {el._id}</p>
            <p>name: {el.name}</p>
            <p>color: {el.color}</p>
            <button id={el._id}  onClick={this.deleteListItem}>Delete</button>
        </div>
      ))
    return (
        <div>
            <input className='del-input' onChange={this.changeHandler} type='text'  name="la_name"/>
            <input className='del-input' onChange={this.changeHandler} type='text'  name="la_color"/>
            <button type='reset' onClick={this.dataHandler}>Add</button>
            <table>
                {table}
            </table>
            <div>{map}</div>
        </div>
    );
  }
}

export default Cats;