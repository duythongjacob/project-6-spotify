import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDataLayerValue } from '../../DataLayer';
function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue()
  console.log(playlists);
  return (
    <div className="sidebar">
      <img className='sidebar__logo'
       src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
       <SidebarOption title="Home" Icon={HomeOutlinedIcon}/>
       <SidebarOption title="Search" Icon={SearchOutlinedIcon}/>
       <SidebarOption title="Your Library" Icon={LibraryBooksOutlinedIcon}/>
       <br />
       <strong className='sidebar__title'>PLAYLIST</strong>
       <hr></hr>
       {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  )
}

export default Sidebar