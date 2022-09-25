// import { useState } from "react";

// import { Button } from "@mui/material";

// import MapList from "../Incomplete/MapList";
// import SelectForm from "./SelectForm";
// import SearchMenuBar from "./SearchMenuBar";
// import { useEffect } from "react";

// import { TextField } from "@mui/material";
// // import { styles } from "@material-ui/pickers/views/Calendar/Calendar";

// import { css } from "@emotion/react";

// const SearchMenu = ({ mapData, saveDisplayMapIcons, dbMessages }) => {
//     const [keyword, setKeyword] = useState("");
//     const [filteredData, setFilteredData] = useState(mapData);

//     const handleChange = (e) => {
//         const newKeyword = e.target.value;
//         setKeyword(newKeyword);
//     };

//     useEffect(() => {
//         console.log("変更 : " + keyword);

//         const searchKeyword = keyword
//             .trim()
//             .toLowerCase()
//             .match(/[^\s]+/g);

//         if (keyword === "" || searchKeyword === null) {
//             setFilteredData(mapData);
//             return;
//         }

//         const result = mapData.filter((data) =>
//             searchKeyword.every(
//                 (kw) => data.respondent_name.toLowerCase().indexOf(kw) !== -1
//             )
//         );
//         setFilteredData(result);
//     }, [keyword]);

//     return (
//         <>
//             <h2>検索機能は未実装</h2>
//         </>
//     );
// };

// const styles = {
//     textField: css`
//         justify-content: center;
//         width: 90%;
//         margin: 5px 5% 0;
//     `,
//     message: css`
//         text-align: center;
//         margin-top: 10px;
//     `
// };

// export default SearchMenu;
