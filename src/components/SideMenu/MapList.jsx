import {List} from '@mui/material';
import MapListItem from './MapList/MapListItem'

const MapList=({
  title="一覧",
  mapData,
  updateMapData,
  archiveMapData
})=>{
    return (
    <>
      <div style={{fontSize: '30px'}}>{title}</div>
      <List
            sx={{
              width: '100%',
              // maxWidth: 360,
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              maxHeight: '80%',
              height:'80%',
              '& ul': { padding: 0 },
            }}
            subheader={<li />}
        >
        {mapData.map((data) => (
          <li key={data.id}>
            <MapListItem
                mapData={data}
                updateMapData={updateMapData}
                archiveMapData={archiveMapData}
            />
          </li>
        ))}
        </List>

    </>)
}

export default MapList;