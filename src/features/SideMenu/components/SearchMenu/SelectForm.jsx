// import {useState} from 'react';

// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';


// const SelectForm=({
//     selectLavel="",
//     select,
//     changeSelectValue,
//     defaultValue
// })=>{

//     const [selectValue,setSelectValue]=useState(defaultValue===""?"指定なし":defaultValue);
//     const handleChange = (event) => {
//         setSelectValue(event.target.value);
//         const data=event.target.value;
//         if(data==="指定なし"){
//             changeSelectValue("");
//         }else{
//             changeSelectValue(data);
//         }
//     };
//     return (
//     <div style={{height:'100px',textAlign:'center'}}>
//         <InputLabel>{selectLavel}</InputLabel>
//         <Select
//             value={selectValue}
//             onChange={handleChange}
//             select={<OutlinedInput label={selectValue} />}
//             style={{height:'60px',width:'80%'}}

//         >
//         {select.map((value) => (
//             <MenuItem
//                 key={value}
//                 value={value}
//             >
//                 {value}
//             </MenuItem>
//         ))}
//         </Select>
//     </div>
//     )
// }

// export default SelectForm;