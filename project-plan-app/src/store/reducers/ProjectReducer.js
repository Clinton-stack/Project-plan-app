const initState = {
    projects : [
        { id: '1', title: 'help me find peach', content: 'dwjsndkoankdsams'},
        { id: '2', title: 'help me find peach', content: 'dwjsndkoankdsams' },
        { id: '3', title: 'help me find peach', content: 'dwjsndkoankdsams' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATED_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATED_PROJECT_ERROR': 
            console.log('created project error', action.err);
            return state;
        default: return state;

    }

}

export default projectReducer;