import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import s from '../../styles/comp.module.css';

class Comp extends Component{
    constructor(p) {
        super(p)
        this.state={
            scale: this.getScale()
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.setScale)
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
                    transform: `scale(${scale}) translate(-50%, -50%)`,
                    WebkitTransform: `scale(${scale}) translate(-50%, -50%)`,
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