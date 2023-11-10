type actionType = {
    type: typeof SET_PROFILE| typeof SET_STATUS| typeof SET_PHOTO,
    profileInfo?: profileStateType,
    status?: string,
    photos?: photosType,
};
type profileStateType = {
    userId: number | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    fullName: string | null, 
    contacts: {
        github: string | null,
        vk: string | null,
        facebook: string | null,
        instagram: string | null,
        twitter: string | null,
        website: string | null,
        youtube: string | null,
        mainLink: string | null,
    },
    photos: photosType,
    status: string | null,
};
type photosType = {
    small: string | null,
    large: string | null,
};

const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS  = 'SET_STATUS';
const SET_PHOTO   = 'SET_PHOTO';

const initialProfileState = {userId: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
    contacts: {
        github: null,
        vk: null,
        facebook: null,
        instagram: null,
        twitter: null,
        website: null,
        youtube: null,
        mainLink: null,
    },
    
    photos:{
        small: null,
        large: null,
    },
    status: null,
};

const profileReducer = (state: profileStateType = initialProfileState, action: actionType) => {
    switch(action.type) {
        case SET_PROFILE: return {...action.profileInfo, status: null};
        case SET_STATUS: return {...state, status: action.status};
        case SET_PHOTO: return {...state, photos: action.photos};
        default: return state;
    };
};

export const setProfileAC = (profileInfo: profileStateType) => ({type: SET_PROFILE, profileInfo});
export const setStatusAC  = (status: string) => ({type: SET_STATUS, status});
export const  setPhotoAC  = (photos: photosType) => ({type: SET_PHOTO, photos});

export default profileReducer;