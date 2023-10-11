import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import s from '../../styles/Comp.module.css';

class Comp extends Component{
    constructor(p) {
        super(p)
        this.state={
            scale: this.getScale()
        }
    }
    componentDidMount() {

        this.scrolltops()
        console.log('window.innerHeight', window.innerHeight);
        alert(window.innerHeight)

    }
    scrolltops=()=> {
        window.addEventListener('scroll', () => {
            if(document.documentElement.scrollTop>900){
                this.setState({sop:true})
            }else {
                this.setState({sop:false})
            }
        })
    }



    getScale=() => {
        const {width=1920, height=1080} = this.props
        let ww=window.innerWidth/width
        let wh=window.innerHeight/height
        return ww<wh?ww: wh
    }
    setScale = debounce(() => {
        let scale=this.getScale()
        this.setState({ scale })
    }, 500)
    render() {
        const {width=1920, height=1080, children} = this.props
        const {scale} = this.state
        return(
            <div
                className={s.scaleBox}
                style={{
                    transform: `scale(${scale}) translate(-18%, -16%)`,
                    WebkitTransform: `scale(${scale}) translate(-18%, -16%)`,
                    width,
                    height
                }}
            >
                {children}
            </div>
        )
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.setScale)
    }
}

export default Comp
