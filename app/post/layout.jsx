import Counter from "./Counter";

export default function layoutPost ({children}){
    return(
        <div>
        <small>Home - Post</small>
        <Counter/>
        {children}
        </div>
    )
}