import React, { Component } from "react";
import initialData from "./data.json";

import { getSocketConnection } from "../../common/socketConnection";

class dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: []
        };
    };

    getVideoCount = async () => {
        const data = await fetch("http://localhost:5000/api/video", {
            method: "GET"
        });

        if(data){
            return data.json()
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
        }
    }

    componentDidMount = () => {
        this.getVideoCount();

        const socket = getSocketConnection();
        socket.on('video-count', (data) => {
          console.log(data);
          let temp = [...this.state.data];

          let index = temp.findIndex(x => x._id === data[0]._id);

          if(index === -1){
              temp.push(data[0]);
          }else{
              temp[index].count = data[0].count
          }
          this.setState({
              data: temp
          })
        })
    }

    render(){

        const { data } = this.state;

        return(
            <div className="container">
                <div className="row">   
                {
                    data.map((video,i) => {
                        return(
                            <div key={i} className="col-xl-2 mt-3 mb-3" style={{ border: '1px solid #dddddd', borderRadius: '5px', padding: '0 1rem', margin: '0 1rem' }}>
                                <p style={{ paddingTop: '0.5rem' }}>{video._id}</p>
                                <p>Play Count: {video.count}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
};

export default dashboard;