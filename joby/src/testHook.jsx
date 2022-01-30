import { useState } from 'react';

const useTestHook = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const createToggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  const handleOpenNavMenu = () => {
    console.log(anchorElNav);
  };

  const handleCloseNavMenu = () => {
    console.log(anchorElNav);
  };

  return {
    anchorElNav,
    setAnchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
    openDrawer,
    createToggleDrawer,
  };
};

export default useTestHook;
