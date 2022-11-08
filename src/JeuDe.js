import React from "react";
export default class JeuDe extends React.Component {
 constructor(props) {
super(props);
this.state = { face: null, compteur: 2, fin: false };
 }
jouer() {
 const valeur = Math.floor(Math.random() * 6) + 1;
 this.setState({ face:valeur , compteur: this.state.compteur+1, });
 if (valeur==this.props.cache)this.componentDidCatch.setState({fin:true})
 }
 getImage() {
    return "images/face1.png"
    }
    
initialiser(){
this.setState({ face:null, compteur: 0, fin: false });
}
render() {
    const styleImage = { width: "60px", height: "60px" };
return (
<div>
<img src={this.state.face == null ?"images/Dé.jpg":`images/face${this.state.face}.jpg`} />
<h1>Jeu de Dé...</h1>
<h2>face:{this.state.face}</h2>
<h2>nombre d'essais…..</h2>
<button onClick={() => this.jouer()}>jouer</button>
<p>Bravo vous avez trouvez la face cachée.....</p>
<button onClick={() => this.initialiser()}>Initialiser</button>
</div>
);
}
}