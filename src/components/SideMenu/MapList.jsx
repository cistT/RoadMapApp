import {List} from '@mui/material';

import MapListItem from './MapList/MapListItem'

const MapList=({
  title="一覧",
  mapData,
})=>{
    return (
    <>
      <div style={{fontSize: '30px'}}>{title}</div>
      <List
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              maxHeight: '80%',
              height:'80%',
              '& ul': { padding: 0 },
            }}
        >
          {mapData.map((data) => (
              <MapListItem
                  mapData={data}
                  key={data.id}
              />
          ))}
      </List>
    </>)
}

export default MapList;