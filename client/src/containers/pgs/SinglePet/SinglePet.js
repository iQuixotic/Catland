import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import data from '../../../master/cats.json'
import { Navbar, HalfIcon } from '../../../components'
import './style.css';

class SinglePet extends React.Component {
    state = {
        _id: 1,
        name: 'f',
        color: '0',
        cuddly: 6,
        playful: 5,
        clean: 5,
        description:''
        
    }
    componentDidMount = () => {
        this.getCat ()
      }

      getCat = () => {
        this.setState({
            _id: data[0]._id,
            name: data[0].name,
            playful: data[0].playful,
            clean: data[0].clean,
            cuddly: data[0].cuddly,
            description:data[0].description
        });
      }

      getEvenState = () => {

      }
  
      getOddState = (arg) => {
          let arr = [];
          for(let i=2;i<=arg;i+=2) {
              arr.push({icon: <FontAwesomeIcon className="paw" icon={faPaw} /> })
              console.log(i, arg)
          }
          return arr;
      }
  render() {
      // map over multiple volleyballs that hold hover state
      const cuddlyPaws = (
        <span className="paws cuddly-paws">
                {this.getOddState(this.state.cuddly).map(el => (  
                    el.icon
                ))}
                {this.state.cuddly%2 ? <HalfIcon cn="paw"/> : <div></div>}            
        </span>
      );
      const cleanPaws = (
        <span className="paws clean-paws">
                {this.getOddState(this.state.clean).map(el => (  
                    el.icon
                ))}
                {this.state.clean%2 ? <HalfIcon cn="paw"/> : <span></span>}            
        </span>
      );
      const playfulPaws = (
        <span className="paws playful-paws">
            {this.getOddState(this.state.playful).map(el => (  
                el.icon
            ))}
            {this.state.playful%2 ? <HalfIcon cn="paw" /> : <span></span>}            
        </span>
      );
     
    return (
      <div className='single'>
        <Navbar/>
        <div className="container">
            <div className="indidual-line name">{this.state.name}</div>
            <div className="indidual-line"><span className="category-header">Cuddly:</span> {cuddlyPaws} </div>
            <div className="indidual-line"><span className="category-header">Clean:</span> {cleanPaws} </div>
            <div className="indidual-line"><span className="category-header">Playful:</span> {playfulPaws} </div>
            <div className="desc">Description: {this.state.description} </div>
        </div>
      </div>
    )
  }
}

export default SinglePet;