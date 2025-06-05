import { createContext , useContext , useState , useEffect} from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme , setTheme] = useState(null);

    useEffect(()=>{
        const saved = localStorage.getItem("theme");
        const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        
        setTheme(saved || systemPref);
    }, []);

    useEffect(()=>{
        localStorage.setItem("theme" , theme);
    }, [theme]);

    const toogleTheme = ()=>{
        setTheme((prev)=>(prev === "light" ? "dark" : "light"));
    };

    return(
        <ThemeContext.Provider value={{theme , toogleTheme}}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    );
}

export function useTheme(){
    return useContext(ThemeContext)
}