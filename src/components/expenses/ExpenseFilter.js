import './ExpenseFilter.css';

export default function ExpenseFilter(props){

    const optionsHandler = (event) => {
        props.onChangeYear(event.target.value);
        
    }

    return (
        <div className='Main_Select'>
            <div className='title'>Filter By Year</div>
            <select value={props.selected} onChange={optionsHandler}>
                <option value={'2019'}>2019</option>
                <option value={'2020'}>2020</option>
                <option value={'2021'}>2021</option>
                <option value={'2022'}>2022</option>
            </select>
        </div>
    )
    
}
