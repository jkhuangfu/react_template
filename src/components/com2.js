import React,{ Component } from 'react';
import styles from './com2.module.less'
export default class Com2 extends Component {
    render(){
        return(
            <div className={styles.com2_div}>
                <h1 className={styles.com2_h1}>页面 2</h1>
                <div className={styles.com2_con}>页面 2 内容</div>
            </div>
        )
    }
}