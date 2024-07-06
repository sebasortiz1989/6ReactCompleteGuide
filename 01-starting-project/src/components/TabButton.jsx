export default function TabButton({children, onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

// Using "children"
// <TabButton>Components</TabButton>
// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li>
// }
//
// Using Attibutes
// <TabButton label = 'Components'></TabButton>
// export default function TabButton({label}) {
//     return <li><button>{label}</button></li>
// }