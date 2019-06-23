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

        } catch(err) {
            console.log(err);
            alert(err.response.data.err); // alert error
        }
    }
}

export const getAllSubs = async () => {
    try {
        const res = await repass.get('subs');
        const allSubs = res.data;

        return allSubs || [];
    } catch(err) {
        alert(err.response.data.err); // alert error
        console.log(err);
    }

    return [];
}

export const fetchSubInfo = async (subName, loggedUser) => {
    try {
        const res = await repass.get(`r/${subName}`);
        let {description, users, isSubbed, mods, createdBy} = res.data;
        let numOfUsers=0;

        if (users) {
            if (users.length) {
                numOfUsers = users.length;
            }
        }
        mods = mods || [];

        const isMod = mods.indexOf(loggedUser) !==-1 || createdBy === loggedUser;
        const sub = {
            name: subName,
            info:description,
            numOfUsers,
            isSubbed,
            isMod
        }
        return { sub, doesNotExist: false };

    } catch(err) {
        // error finding the sub
        console.log(err.response);
        return { doesNotExist: true };
    }
}

export const getLink = (sub, user, id) =>{
    let link;
    if (sub) {
        link = `r/${sub}`;
        if (id) {
            link = `r/${sub}/${id}`;
        }
    } else if (user) {
        link = `u/${user}`;
    } else {
        link=`r/all`;
    }
    return link;
}

export const determineDest = async(params) => {

    let { sub, user, id } = params;
    const link = getLink(sub, user, id);
    let subName;

    if (user) {
        user= { username: user };
        return { user, id, link, sub: {} };

    } else if (sub) {
        subName = sub;
    } else {
        subName = 'all';
    }
    sub = { name: subName };
    return { sub, id, link, user: {} };
}

export const fetchUserInfo = async (username) => {
    try {
        const res = await repass.get(`u/${username}`);
        const user = res.data;

        return { user, doesNotExist: false };
    } catch(err) {
        console.log(err);
        return { doesNotExist: true };
    }
}

export const fetchPost = async(id) => {
    try {
        const res = await repass.get(`listing/${id}`);
        const {data} = res;
        if (!data.title) {
            // no title signifies deleted post
            return { isHidden: true };
        }
        data.ups= data.ups.length;
        data.comments=0;
        data.url=`/r/${data.sub}/${id}`;
        if (data.downs) {
            data.ups = data.ups - data.downs.length;
        }
        if (data.children){
            data.comments=data.children.length;
        }
        if (data.originalPost) {
            data.url = `/r/${data.sub}/${data.originalPost}#${id}`;
        }

        const post = { ...data };
        return post;

    } catch(err) {
        console.log(err.response);
    }
}