import React from "react";
import Styles from "./Index.module.css"
import AttiCoffee from "../../../assets/images/AttiCoffeLogo.jpg"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import UserIcon from "../../../assets/images/account_thin.svg"
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

const ITEM_HEIGHT = 48;

const HeaderPage = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={Styles.HeaderPageMainContainer}>
            <img src={AttiCoffee} alt="" className={Styles.HeaderPageLogo} />
            <div className={Styles.HeaderPageNavigationContainer}>
                <Link to="/" className={Styles.HeaderPageLinkText}>Home</Link>
                <Link to="/gift" className={Styles.HeaderPageLinkText}>Gift</Link>
                <Link to="/order" className={Styles.HeaderPageLinkText}>Order</Link>
                <Link to="/" className={Styles.HeaderPageLinkText}>Pay</Link>
                <Link to="/" className={Styles.HeaderPageLinkText}>Store</Link>
            </div>
            <Paper
                className={Styles.AttiCafeHeaderSearchBox}
                component="form"
                sx={{ display: 'flex', alignItems: 'center', width: 320, borderRadius: "50px", padding: "0rem 0.5rem" }}
            >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Looking for something specific?"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />


            </Paper>
            <img src={UserIcon} alt="" className={Styles.HeaderPageUserIcon} />


            <div className={Styles.AtticafeMobileViewMenuIcon}>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        paper: {
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </div>
    )
}

export default HeaderPage