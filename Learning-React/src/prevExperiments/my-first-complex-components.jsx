function ParentComponent() {
    return (
        <>
            <Child />
        </>
    )
}

function Child() {
    return (
        <>
            <p>This is panganay</p>
            <GrandChild />
        </>
    )
}

function GrandChild() {
    return (
        <>
            <p>This is apo</p>
        </>
    )
}

export default ParentComponent