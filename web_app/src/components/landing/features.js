import React from "react";

const Features = (props) => {
    return (
        <div className="row" style={{borderBottom: "4px solid #e3324c"}}>
            <div className="col-md-12 col-lg-6">
                <center>
                <img src="/human_listening_song.png" className="features-section-image" />
                </center>
            </div>
            <div className="col-md-12 col-lg-6 features-section-main-div">
                <center>
                    <p className="features-section-main-text">Enjoy your books on the go!!!</p>
                    <p className="features-section-supporting-text">Don't just read your books, live them and now even you can listen to these peronalised books on the go.</p> 
                </center>
            </div>
            <div className="col-md-12 col-lg-6 laptop-view-only features-section-main-div">
                <center>
                    <p className="features-section-main-text">Read full book or just the summary</p>
                    <p className="features-section-supporting-text">Are you a reader? Read small to the point article and summaries, or read whole book if you want to explore in depth</p> 
                </center>
            </div>
            <div className="col-md-12 col-lg-6">
                <center>
                <img src="/read_book.png" className="features-section-image" />
                </center>
            </div>
            <div className="col-md-12 col-lg-6 mobile-view-only features-section-main-div">
                <center>
                    <p className="features-section-main-text">Read full book or just the summary</p>
                    <p className="features-section-supporting-text">Are you a reader? Read small to the point article and summaries, or read whole book if you want to explore in depth</p> 
                </center>
            </div>
            <div className="col-md-12 col-lg-6">
                <center>
                <img src="/loving_app.png" className="features-section-image" />
                </center>
            </div>
            <div className="col-md-12 col-lg-6 features-section-main-div">
                <center>
                    <p className="features-section-main-text">Enjoy your books on the go!!!</p>
                    <p className="features-section-supporting-text">Don't just read your books, live them and now even you can listen to these peronalised books on the go.</p> 
                </center>
            </div>
        </div>
    )
}

export default Features;