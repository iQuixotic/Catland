import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import data from '../../../master/cats.json'
import './style.css';
import { HalfIcon, Navbar } from "../../../components";
import { APICATS } from "../../../api";
import { isConstructorDeclaration } from "typescript";

let arr, newArr =[];
class EditSinglePet extends React.Component {
    state = {
        _id: 1,
        name: 'f',
        color: '0',
        cuddly: 5,
        playful: 5,
        clean: 5,
        description:'',
        editPaws: true,
        editMode: false
        
    }
    componentDidMount = () => {
      const myProps = this.props
      console.log("------------", myProps.match.params.id)
      APICATS.getSingleCat(myProps.match.params.id)
        .then(res => this.setState({  
          _id: res.data[0]._id,
          name: res.data[0].name,
          playful: res.data[0].playful,
          clean: res.data[0].clean,
          cuddly: res.data[0].cuddly,
          description: data[0].description
         }))
        .catch(err => { throw(err) });
        }

      getRatings = () => {
        this.setState({
            _id: data[0]._id,
            name: data[0].name,
            playful: data[0].playful,
            clean: data[0].clean,
            cuddly: data[0].cuddly,
            description:data[0].description
        });
      }

      hoveringPaws = (e) => {
        let hoveringOver = parseInt(e.currentTarget.id.substring(9,7))
        newArr=[];
        return arr.map(el=>{
          if(parseInt(el.icon.props.id.substring(9,7))<hoveringOver) {
            newArr.push(el)
            // console.log(arr.length-newArr.length)
          }
        })
      }

      notHoveringPaws = () => {
        this.setState({
          hovering: ''
        })
      }

      setEditingState = () => {
        this.setState({ editPaws: !this.state.editPaws })
      }
  
      getEditIcons = (fieldName, arg) => {
        // console.log("lfdsa", arg)
        arr = [];
        for(let i=2;i<=10;i+=2) {
            if (i<=arg) {
              arr.push({icon: <FontAwesomeIcon 
                onClick={() => this.setArgState(fieldName, i)}
                id={"faIcon-"+i} 
                className="paw" icon={faPaw} /> })
              } else {
              arr.push({icon: <FontAwesomeIcon 
                id={"faIcon-"+i} 
                className="clear-paw"
                onClick={() => this.setArgState(fieldName, i)}
                icon={faPaw} /> })
            }
        }
        // console.log(this.state)
        return arr;
    }
      
    setArgState = (fieldName, arg2) => {
      // console.log(fieldName, arg2)
      this.setState({
        [fieldName]: arg2,
      })
    }

    editCats = (e) =>  {
      this.setState({ editMode: !this.state.editMode })
    }

    deleteListItem = (e) => {
      let t = e.currentTarget.id
      let myArray 
      let newCats = this.state.allCats;
      newCats = newCats.filter(function( obj ) {
          return obj._id !== parseInt(t);
    });
  }

  editDescription = () => {
  //   this.setState({
  //     description: 
  //   })
  }

  submitUpdateHandler = () => {
    let data = {...this.state}
    
    console.log(data)
    APICATS.updateSingleCat(data)
    .then(res =>  console.log(res))
  }

      getOddState = (arg) => {
        console.log("this is the areg", arg)
          arr = [];
          for(let i=2;i<=10;i+=2) {
              if (i<=arg) {
                arr.push({icon: <FontAwesomeIcon 
                  onClick={() => this.setArgState(i)}
                  id={"faIcon-"+i} 
                  className="paw" icon={faPaw} /> })
                // continue;
                console.log("this is the i at now:" , i, arg)
              } else {
                arr.push({icon: <FontAwesomeIcon 
                  id={"faIcon-"+i} 
                  className="clear-paw"
                  onMouseEnter={this.hoveringPaws}
                  onMouseLeave={()=> this.notHoveringPaws} 
                  icon={faPaw} /> })
              }
             
              // console.log(i, arg)
          }
          return arr;
      }
  render() {
      // map over multiple volleyballs that hold hover state
      const EditPaws = (props) => (
        <span  className="paws edit-paws">
            {this.getEditIcons(props.fieldName, props.editing).map(el => (  
                     el.icon 
            ))}
        </span>);
      const Paws = (props) => (
        <span  className="paws">
            {this.getOddState(props.fieldName).map(el => (  
                     el.icon 
            ))}
        </span>);
      // const cuddlyPaws = (
      //   <span  className="paws cuddly-paws">
      //           {this.getOddState(this.state.cuddly).map(el => (  
      //               el.icon
      //           ))}
      //           {/* {this.state.cuddly%2 ? <HalfIcon cn="paw"/> : <div></div>}             */}
      //   </span>
      // );
      // const cleanPaws = (
      //   <span className="paws clean-paws">
      //           {this.getOddState(this.state.clean).map(el => (  
      //               el.icon
      //           ))}
      //           {this.state.clean%2 ? <HalfIcon cn="paw"/> : <span></span>}            
      //   </span>
      // );
      // const playfulPaws = (
      //   <span className="paws playful-paws">
      //       {this.getOddState(this.state.playful).map(el => (  
      //           el.icon
      //       ))}
      //       {this.state.playful%2 ? <HalfIcon cn="paw" /> : <span></span>}            
      //   </span>
      // );
     
    return (
      <div className='single'>
         <Navbar/>
        <div className="container">
          <button className="fa-btn"  onClick={this.editCats}><FontAwesomeIcon icon={faEdit} /> </button>
          {/* <button className="fa-btn"  onClick={this.deleteListItem}><FontAwesomeIcon icon={faTrashAlt} /></button> */}
            <div className="indidual-line name">{this.state.name}</div>
           <div className="ratings-area">
              <div className="ratings">Your Ratings:</div>
              <div className="indidual-line"><span className="category-header">Cuddly:</span> 
                {this.state.editMode ? <EditPaws fieldName={"cuddly"} editing={this.state.cuddly}/> : <Paws fieldName={this.state.cuddly} />} </div>
              <div className="indidual-line"><span className="category-header">Clean:</span> 
                {this.state.editMode ? <EditPaws fieldName={"clean"} editing={this.state.clean}/> : <Paws fieldName={this.state.clean} />} </div>
              <div className="indidual-line"><span className="category-header">Playful:</span> 
                {this.state.editMode ? <EditPaws fieldName={"playful"} editing={this.state.playful}/> : <Paws fieldName={this.state.playful} />} </div>
           </div>
            <div className="desc"><span>Description: </span>{!this.state.editMode ? (<div>{this.state.description}</div>) : (
              <div>
                <textarea onChange={this.editDescription} className="editing-box">{this.state.description}</textarea>
                <button className="submit-edits" onClick={this.submitUpdateHandler}>Submit</button>
              </div>
            )} </div>
        </div>
      </div>
    )
  }
}

export default EditSinglePet;