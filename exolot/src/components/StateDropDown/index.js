import React, { Component } from 'react'
import { Dropdown} from "react-bootstrap";
export default class StateDropDowm extends Component {
    States =['karnataka','Kerala', 'Mumbai' ]
    state={
        SelectedValue: 'Select State'
    }
    handleStateChange = (e) =>{
        this.setState({
            SelectedValue: e.currentTarget.innerText
        })
     }  

    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {this.state.SelectedValue}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {this.States.map((val, ind) =>{
                          return(
                            <Dropdown.Item onClick={(e)=>this.handleStateChange(e)}>{val}</Dropdown.Item>
                          )
                      })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}
