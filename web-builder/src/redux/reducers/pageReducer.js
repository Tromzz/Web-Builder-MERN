import { TYPES } from "../actions/pageAction";

const {
  LIST_PAGE_REQUEST_SEND,
  LIST_PAGE_REQUEST_ERROR,
  LIST_PAGE_REQUEST_SUCCESS,

  CREATE_PAGE_REQUEST,
  CREATE_PAGE_ERROR,
  CREATE_PAGE_SUCCESS,

  DELETE_PAGE_REQUEST,
  DELETE_PAGE_ERROR,
  DELETE_PAGE_SUCCESS,
} = TYPES;

const initialState = {
  listPageLoading: false,
  listPageError: "",
  pages: [],
  createPageError: "",
  createPageLoading: false,
  deletePageLoading: false,
  deletePageError: "",
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PAGE_REQUEST_SEND:
      return { ...state, listPageLoading: true, listPageError: "" };
    case LIST_PAGE_REQUEST_ERROR:
      return { ...state, listPageLoading: false, listPageError: action.error };
    case LIST_PAGE_REQUEST_SUCCESS:
      return {
        ...state,
        listPageLoading: false,
        listPageError: "",
        pages: action.data,
      };

    case CREATE_PAGE_REQUEST:
      return { ...state, createPageError: "", createPageLoading: true };
    case CREATE_PAGE_ERROR:
      return {
        ...state,
        createPageError: action.data,
        createPageLoading: false,
      };
    case CREATE_PAGE_SUCCESS:
      return { ...state, createPageError: "", createPageLoading: false,  pages: [...state.pages, action.data]};
    
    case DELETE_PAGE_REQUEST:
        return { ...state, deletePageLoading: true, deletePageError: "" };
    case DELETE_PAGE_ERROR:
        return {
          ...state,
          deletePageLoading: false,
          deletePageError: action.payload,
        };
    case DELETE_PAGE_SUCCESS:
        return {
          ...state,
          deletePageLoading: false,
          pages: state.pages.filter(page => page._id !== action.payload)
        };
    
    default:
      return state;
    }
};

export default pageReducer;
