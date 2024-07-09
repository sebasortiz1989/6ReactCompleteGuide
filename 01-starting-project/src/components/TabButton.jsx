export default function TabButton({children, isSelected, ...props}) {
    return (
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
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