import React from 'react';
import styles from './Sort.module.css';

class Sort extends React.Component{
    onChange = (e) => {
        const value = e.target.options[e.target.selectedIndex].value;
        console.log(value);
        // 
    }
    render(){
        return (
            <div className={styles.sort}>
                Sort
                <select onChange={this.onChange}>
                    <option value="top">
                        Top
                    </option>
                    <option value="new">
                        Newest
                    </option>
                </select>
            </div>
        )
    }
}
export default Sort;