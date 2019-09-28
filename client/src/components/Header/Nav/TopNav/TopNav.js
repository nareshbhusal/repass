import React from 'react';
import styles from './TopNav.module.css';

import SubsList from '../../../SubsList/SubsList';
import Info from '../../../Info/Info';

// read: MobileNav
class TopNav extends React.Component{

    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
    }

    state = {
        current: 'info',
        modalOpen: false
    }

    toggleCurrent = async(e) => {
        await this.setState({ current: e.target.name });
    }

    disableScrolling(){
        window.document.body.style.overflow= 'hidden';
    }

    enableScrolling(){
        window.document.body.style.overflow= 'auto';
    }

    async toggleModal(){
        const toOpen = !this.state.modalOpen;
        await this.setState({ modalOpen: toOpen });

        if (this.state.modalOpen) {
            this.disableScrolling();
        } else {
            this.enableScrolling();
        }
    }

    renderContent(){
        const current = this.state.current;
        const { user, sub, join, theme, deleteHandler, allSubs, userSubs } = {...this.props.topNavContentData};
        if (current === 'subs') {
            return (
                <SubsList 
                    className={styles.subs}
                    allSubs={allSubs}
                    userSubs={userSubs}
                    theme={theme.theme}/>
            );
            
        } else {
            return (
                <Info 
                    className={styles.info}
                    sub={sub}
                    user={user} 
                    join={join} 
                    theme={theme.theme} 
                    deleteHandler={deleteHandler}/>
            );
        }
    }

    render(){
        const theme = this.props.topNavContentData.theme;

        return (
            <div role="navigation" className={styles.topnav+ ` ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={styles.menuToggle} id="menuToggle">

                    <input onClick={this.toggleModal} className={styles.checkbox} type="checkbox" />
                    
                    <span className={styles.span}></span>
                    <span className={styles.span}></span>
                    <span className={styles.span}></span>
                    <div id="menu" className={styles.menuwrapper}>
                        <div className={styles.menu}>
                            <div className={styles.tabs}>
                                <button name="info" onClick={this.toggleCurrent} className={styles.tab}>info</button>
                                <button name="subs" onClick={this.toggleCurrent} className={styles.tab}>communities</button>
                            </div>
                            <div className={styles.content}>
                                {this.renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNav;