import React,{ Component } from 'react';
import {connect} from 'react-redux'
import action from '../store/module/store_demo1/action'
import './com1.less'
@connect(
    state => state.store_one,
    {
        ...action
    }
)
export default class Com1 extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props)
    }
    t(){
        this.props.actionFnOne();
    }
    render(){
        return(
            <div className="com1_div">
                <h1 className="com1_h1">页面 1</h1>
                <div className="com1_con">页面 1 内容</div>
                <button onClick={this.t.bind(this)}>测试</button>
                <p>message:{this.props.storeInfo}</p>
            </div>
        )
    }
}