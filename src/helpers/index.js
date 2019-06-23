import repass from '../repass';

export const joinSub = async (subName) => {
    try {
            
        await repass.post(`subscribe/${subName}/`);
    } catch(err) {
        console.log(err);
        alert(err.response.data.err); // alert error
    }
}

export const determineTheme = async(currentTheme, changeTheme) => {
    try {
        const res = await repass.get('gettheme');
        const sessionTheme = res.data;
        if (currentTheme === sessionTheme) {
            return;
        }
        changeTheme();

    } catch(err) {
        console.log(err);
    }
}

export const deleteSub = async(subName) => {
    if (confirm('Are you sure you want to delete r/'+subName)) {
        try {
            const res = await repass.delete(`r/${subName}`);
            console.log(res.data);
            history.push('/');
        } catch(err) {
            console.log(err);
            alert(err.response.data.err); // alert error
        }
    }
}