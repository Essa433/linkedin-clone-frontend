function dd() {
    return (<>
    </>);
}

export default dd;

// import { cloneDeep } from 'lodash';
// import { useSelector } from 'react-redux';
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistReducer, persistStore } from 'redux-persist';
// // @ts-ignore
// import storage from 'redux-persist/lib/storage';
// import { Experience } from '../data/profile/ExperianceProfileData';



// // Redux

// ///// Types
// interface AppExperience {
//     id: string;
//     experiences: Experience[]
//     experienceAvatarUrl: string;
//     title: string;
//     description: string;
//     date: Date;
//     city: string;
// }
// interface IAction<X> {
//     type: 'ADD_POST' | 'DELETE_POST' | 'UPDATE_POST' | 'USER_MOVED' | 'ADD_COMMENT';
//     payload: X;
// }

// ///// State
// const initialExperiences: AppExperience = {
//     id: '1',
//     experiences: initialExperiences,
//     experienceAvatarUrl: 'string';
//     title: 'string',
//     description: 'string',
//     date: new Date(),
//     cities: [],
// };

// ///// Reducer
// function stateReducer(oldState: AppExperience = initialExperiences, action: IAction<any>): AppState {
//     const newState = cloneDeep(oldState);

//     switch (action.type) {
//         case 'USER_MOVED':
//             newState.lastMovedDate = new Date();
//             return newState;
//         case 'ADD_POST':
//             newState.posts.push(action.payload);
//             return newState;
//         case 'DELETE_POST':
//             newState.posts = newState.posts.filter((p) => p.id !== action.payload.id);
//             return newState;
//         case 'UPDATE_POST':
//             const index = oldState.posts.findIndex((p) => p.id === action.payload.id);
//             if (index === -1) return oldState;
//             newState.posts[index] = action.payload;
//             return newState;
//         case 'ADD_COMMENT':
//             newState.comments.push(action.payload);
//             return newState;
//         default:
//             return oldState;
//     }
// }

// /// Actions
// export function userMoved(): IAction<null> {
//     return {
//         type: 'USER_MOVED',
//         payload: null,
//     };
// }

// export function addPost(post: Post): IAction<Post> {
//     return {
//         type: 'ADD_POST',
//         payload: post,
//     };
// }
// export function deletePost(post: Post): IAction<Post> {
//     return {
//         type: 'DELETE_POST',
//         payload: post,
//     };
// }
// export function updatePost(post: Post): IAction<Post> {
//     return {
//         type: 'UPDATE_POST',
//         payload: post,
//     };
// }

// export function addComment(comment: Comment): IAction<Comment> {
//     return {
//         type: 'ADD_COMMENT',
//         payload: comment,
//     };
// }

// /// Selectors
// export function usePosts(): Post[] {
//     return useSelector<AppState, Post[]>((state) => state.posts);
// }

// export function useBlogs(): Blog[] {
//     return useSelector<AppState, Blog[]>((state) => state.blogs);
// }

// export function useUserId(): string | null {
//     return useSelector<AppState, string | null>((state) => state.userId);
// }

// export function usePostComments(postId: string): Comment[] {
//     return useSelector<AppState, Comment[]>((state) => {
//         return state.comments.filter((comment) => comment.post_id === postId);
//     });
// }

// /// Store

// const persistConfig = { key: 'root', storage };
// const persistedReducer = persistReducer(persistConfig, stateReducer);

// export const store = createStore(persistedReducer, composeWithDevTools());
// export const persistor = persistStore(store);
