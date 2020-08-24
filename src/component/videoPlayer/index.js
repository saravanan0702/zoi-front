import React, { Component } from "react";
// import nsq from "nsqjs";

// const writer = new nsq.Writer(
//     "127.0.0.1",
//     "4150",
// );

// writer.connect();

class videoPlayer extends Component{
    constructor(props){
        super(props);

        this.state = {
            videoplayer: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        };
    };

    handlePlay = (videoname) => {
        // writer.on('ready', () => {
        //     writer.publish('test', videoname);
        //     // setInterval(() => {
        //     //     const msg = { name: 'Gijo Varghese' };
        //     //     console.log('Message sent:', msg);
                
        //     // }, 1000);
        // });
        fetch("http://localhost:4151/pub?topic=test", {
            method: "POST",
            mode: "no-cors",
            header: {
                "Access-Control-Allow-Origin": "*"
            },
            body: videoname
        })
    }

    render(){

        const { videoplayer } = this.state;

        return(
            <div className="container">
                <div className="row">   
                {
                    videoplayer.map((data,i) => {
                        const videoPlayerName = `video${i+1}`;
                        return(
                            <div key={i} className="col-xl-2 mt-3 mb-3">
                                <button type="button" className="btn btn-primary" style={{ width: '100%', borderRadius: '5px' }} onClick={() => this.handlePlay(videoPlayerName) }>
                                    {videoPlayerName}
                                </button>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
};

export default videoPlayer;