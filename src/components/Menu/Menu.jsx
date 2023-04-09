import React from 'react';
import {
  Container,
   Wrapper,
  Itemmenu,
  Items,
} from './style';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Menu({ darkMode, setDarkMode }) {
  return (
    <Container>
        <Wrapper>
            <Itemmenu>
            <MenuIcon />
            </Itemmenu>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <Items>
                <HomeIcon sx={{ marginBottom: '4px' }} />
                Home
            </Items>
            </Link>
            <Link to='trends' style={{ textDecoration: 'none', color: 'inherit' }}>
            <Items>
                <ExploreOutlinedIcon sx={{ marginBottom: '4px' }} />
                Explore
            </Items>
            </Link>
            <Link
            to='subscriptions'
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <Items>
                <SubscriptionsOutlinedIcon sx={{ marginBottom: '4px' }} />
                Subscriptions
            </Items>
            </Link>

            <Items>
            <VideoLibraryOutlinedIcon sx={{ marginBottom: '4px' }} />
            Library
            </Items>
            <Items>
            <HistoryOutlinedIcon sx={{ marginBottom: '4px' }} />
            History
            </Items>

            <Items onClick={() => setDarkMode(!darkMode)}>
            <SettingsBrightnessOutlinedIcon sx={{ marginBottom: '4px' }} />
            {darkMode ? 'Light' : 'Dark'} Mode
            </Items>

        </Wrapper>
    </Container>
  );
}

export default Menu;