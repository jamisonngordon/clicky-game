import React, { Component } from "react";

class Image extends Component {

    state = {
        images: [
            'https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest?cb=20170621101134',
            'https://vignette.wikia.nocookie.net/shipping/images/3/36/Naruto_Uzumaki.png/revision/latest?cb=20160331152428',
            'https://media.comicbook.com/2017/03/naruto-shippuden-episode-479-235857.jpg',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ecbc65f-067e-4329-9d88-ea047accc1dc/d6qm6u3-715a85b1-43aa-451a-8f9b-cd56962dd175.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlY2JjNjVmLTA2N2UtNDMyOS05ZDg4LWVhMDQ3YWNjYzFkY1wvZDZxbTZ1My03MTVhODViMS00M2FhLTQ1MWEtOGY5Yi1jZDU2OTYyZGQxNzUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OiJ7IJ6xcknFqS-XtidYD6xuAf_Oghtz_d6Y_zNqdng',
            'https://qph.fs.quoracdn.net/main-qimg-b8cc6912cfd8afaf0922b69d828a2913'
        ],
        alreadyClicked: []
    };

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    onClick = (event) => {
        let clicked = event.target.src;
        if(this.state.alreadyClicked.includes(clicked)) {
            this.props.resetScore();
            this.setState({
                alreadyClicked: []
            })
        }
        else {
            this.setState({
                images: this.shuffle(this.state.images),
                alreadyClicked: [...this.state.alreadyClicked, clicked]
            });
            this.props.increaseScore();
        }
    };

    render() {
        return (
            <div>
                {this.state.images.map((image, i) => {
                    return <img alt={'img'} src={image} key={i} style={{width: '150px', height: '150px'}} onClick={this.onClick}/>
                })}
            </div>
        );
    }

}

export default Image;
