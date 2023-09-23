import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
    return (
        <div className="expenses">

            <ExpenseItem expense={props.data[0]} />
            <ExpenseItem expense={props.data[1]} />
            <ExpenseItem expense={props.data[2]} />
        </div>
    )
}
export default Expenses;