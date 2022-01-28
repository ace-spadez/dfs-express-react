// import React, { Component } from 'react';
// import TextField from '@mui/material/TextField';
import * as React from 'react';
// import TextField from "@material-ui/TextField";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Submit DFS assignment before deadline"],

      text : ""
    };
  }
  mstyle  = {


  }

  render() {
    return (
      <div  style={{backgroundColor:"#ffffff",width:"100hw",height:"100%",padding:"0px 100px"}}>

        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

        <div style={{width:"100%",height:"50px",backgroundColor:"black",boxShadow:"grey 2px 2px 10px",color:"white",padding:"5px 20px"}}>
        <h2> To Do list</h2>

        </div>
        <h2>
          {

            this.state.list.map((e,i) => {


              return (<div style={{margin:"20px 20px",padding:"30px 10px",backgroundColor:"#f0f0f0"}}>{i+1}. {e}<button 
              onClick={()=>{
                this.setState({
                  list: [...this.state.list.slice(0,i),...this.state.list.slice(i+1)]
                });
              }}
          style={{backgroundColor:"red",color:"white",padding:"10px",margin:"10px",float:"right",border:"none",borderRadius:"5px"}}

              >Remove</button></div>);

            })
          }
        </h2>
        <input
        type='text'
        value={this.state.text}
        label="Enter your name"
        onChange={(e) => {
         this.setState({text:e.target.value,list:this.state.list});
        }}
      />
        <button
          className="square"
          style={{backgroundColor:"black",color:"white",padding:"10px",margin:"10px",border:"none",borderRadius:"5px"}}
          onClick={() => this.setState({ list: [...this.state.list, this.state.text],text:'' })}
        >
          Add Todo

          {/* {this.state.list} */}
      </button>
      </div>
    );
  }
}


export default App;