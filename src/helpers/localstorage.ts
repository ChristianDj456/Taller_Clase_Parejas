export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('todoListState');
      if (serializedState === null) {
        return undefined; 
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Error loading state from localStorage", err);
      return undefined;
    }
  };
  
  export const saveState = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('todoListState', serializedState);
    } catch (err) {
      console.error("Error saving state to localStorage", err);
    }
  };
  