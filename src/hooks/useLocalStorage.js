import {useState} from 'react';

//INSTRUCTIONS -1st part of project:
// Create a new directory called hooks, and a new file in it called useLocalStorage.
// Build a function called useLocalStorage. Now, to set something to localStorage, we need a key (must be a string) and a value (can be anything). To retrieve something from localStorage, we need the key. To update something in localStorage, you use the same method as adding something new, and it will just replace the old key/value pair in localStorage. Knowing this, let's add key and initialValue as parameters to the hook.
// We're going to set up some state here. Set up a state property called storedValue.
// This state property is going to take a function as it's initial value. When we do this, whatever that callback function returns is what gets set as the intialValue for the state property.
// In the callback function, we'll check to see if the item we passed in already exists in localStorage, and return that value, otherwise we'll return whatever initialValue was passed in.
// Quick note, if you pass in arrays or objects to localStorage, you will need to parse it into JSON. Then when you retrieve it, like we do below, you'll need to parse it back into regular JavaScript


//To update something in localStorage, you can use the same method as adding something new and it will just replace the old key/value pair in localStorage: knowing this, make (key, initialValue) parameters to the hook
export const useLocalStorage = (key, initialValue) => {
    //set up state property called "stored value".
    //state property is going to take a function as its initial value: useState(() => )
    //Whatever that callback function returns is what gets set as the initialValue for the state property.  ???????  
    const [storedValue, setStoredValue] = useState(() => {
        //checking to see if the item we passed in already exists in localStorage
        //QUESTION: are we checking to see if the key is already in localStorage?  Why?
        //If it's not in local storage, we return whatever initial value was passed in?  What is that?  storedValue or initialValue?  
        //QUESTION: Two Lines below: checking to see if key is already in localStorage, and if it is we set it to initialValue???
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;

        //Remember we're trying to use this hook like this: const [name, setName] = useLocalStorage('name', 'Dustin'). So far we have made the value part of the hook, but not the setter. Let's go ahead and create a setter function, and return that in the array as well.
        
    });
    const setValue = value => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};


//This whole function is just setting up state from line 17... setting them based on what is returned from both functions.
//I don't understand beyond that..  The end goal is to make it so that our app has a dark mode option.  What role does this play?  I think storedValue and setStoredValue are the two options of state that determine whether or not darkMode is on and being remembered in local storage....
//I think we're setting it to something like [darkMode, on] or [darkMode, off], depending what is found in localStorage.  const [name, setName] = useLocalStorage('name', 'Dustin') is the example they keep giving


