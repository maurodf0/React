export default function Title({locked}){
    return (
        <h1 className="title">{locked ? <span>Limit Reached. Buy pro version</span> : "Fancy Counter"}</h1>
    )
}

