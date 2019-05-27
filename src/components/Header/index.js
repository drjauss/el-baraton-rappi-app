import React, {Component} from 'react'
import Page from './page'

export default class Header extends Component{
    render(){
        const {
            cookies
        } = this.props;

        return(
            <Page cookies={cookies} />
        )
    }
}