export const initialStore=()=>{
  return{
    contactArray:[],
    singleContact:{}

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_contact_list":
      return {
        ...store,
        contactArray: action.payload
      };

    case "set_single_contact":
      return {
        ...store,
        singleContact: action.payload
      };

    case "delete_contact":
      console.log("Before delete:", store.contactArray);
      const updatedList = store.contactArray.filter(contact => contact.id !== action.payload);
      console.log("After delete:", updatedList);
      return {
        ...store,
        contactArray: updatedList
      };

    default:
      console.warn("Unknown action: " + action.type);
  }
}
