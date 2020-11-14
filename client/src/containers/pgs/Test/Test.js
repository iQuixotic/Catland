import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import data from '../../../master/cats.json'
import './style.css';
// import '../../../master/main.css';
import { HalfIcon } from "../../../components";

class TestPage extends React.Component {
    state = {
        _id: 1,
        name: 'f',
        color: '0',
        cuddly: 5,
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
            description:data[0].description
        });
      }

      getEvenState = () => {

      }
  
      getOddState = (arg) => {
          let arr = [];
          for(let i=2;i<=arg;i+=2) {
              arr.push({icon: <FontAwesomeIcon className="hover-background" icon={faPaw} /> })
              console.log(i, arg)
          }
          return arr;
      }
  render() {
      // map over multiple volleyballs that hold hover state
      const cuddlyPaws = (
        <span className="cuddly-paws">
                {this.getOddState(this.state.cuddly).map(el => (  
                    el.icon
                ))}
                {this.state.cuddly%2 ? <HalfIcon /> : <div></div>}            
        </span>
      );
      const cleanPaws = (
        <span className="clean-paws">
                {this.getOddState(this.state.clean).map(el => (  
                    el.icon
                ))}
                {this.state.clean%2 ? <HalfIcon /> : <span></span>}            
        </span>
      );
      const playfulPaws = (
        <span className="playful-paws">
            {this.getOddState(this.state.playful).map(el => (  
                el.icon
            ))}
            {this.state.playful%2 ? <HalfIcon /> : <span></span>}            
        </span>
      );
     
    return (
      <div className='single'>
        <div className="container">
            <div className="indidual-line">{this.state.name}</div>
            <div className="indidual-line">Cuddly: {cuddlyPaws} {this.state.cuddly/2}</div>
            <div className="indidual-line">Clean: {cleanPaws} {this.state.clean/2}</div>
            <div className="indidual-line">Playful: {playfulPaws} {this.state.playful/2}</div>
            <div className="">Description: {this.state.description} </div>
        </div>
      </div>
    )
  }
}

export default TestPage;