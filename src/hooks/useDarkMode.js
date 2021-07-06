import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

//step 2 of project:
export const useDarkMode = () => {
    //Calling useLocalStorage hook that we used before and setting it up like useState
    //QUESTION: on the line below what does 'dark' do in useLocalStorage('dark'). it's setting an initial value?
    const [darkMode, setDarkMode] = useLocalStorage('dark');
    //we use useEffect here to stop this from running constantly.  I don't understand beyond that.
    useEffect(() => {
        //here's our logic to check if darkMode is turned on or not
        // QUESTION: I still don't get how we can just say if darkMode === true then turn on class darkMode to the whole body.  I get the rest of the if/else but i don't understand how the app knows what I'm talking about if I just say if (darkMode === true).  What makes darkMode true or false here?
        if (darkMode === true) {
            document.querySelector('body')
            .classList.add('dark-mode')
        } else{
            document.querySelector('body')
            .classList.remove('dark-mode')
        }
        //we're adding this dependency array because we want this to run only when the state of darkMode changes not when anything in the component changes(i think)
    }, [darkMode] )
    return [darkMode, setDarkMode]
    
}