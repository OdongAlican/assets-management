import {
  Button,
  Card,
  Grid,
  Stack
} from '@mui/material';
import {
  Outlet,
  useLocation,
  useNavigate,
  useParams
} from 'react-router';
import { ROUTES } from '../../core/routes/routes';
import { useEffect, useState } from 'react';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import BalanceIcon from '@mui/icons-material/Balance';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { INavigation } from './interface';

const AssetsManagement = () => {
  const [path, setPath] = useState<string>("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>()

  useEffect(() => { setPath(pathname) }, [pathname])

  const navigations: Array<INavigation> = [
    {
      id: 1,
      text: "IT Equipment",
      path: ROUTES.LIST_ASSETS,
      otherRoutes: [ROUTES.CREATE_ITEQUIPMENT, ROUTES.UPDATE_ITEQUIPMENT],
      icon: <SettingsBrightnessIcon />
    },
    {
      id: 2,
      text: "Office Equipment",
      path: ROUTES.LIST_OFFICE_EQUIPMENT,
      otherRoutes: [ROUTES.CREATE_OFFICE_EQUIPMENT, ROUTES.UPDATE_OFFICE_EQUIPMENT],
      icon: <BalanceIcon />
    },
    {
      id: 3,
      text: "Fleet",
      path: ROUTES.LIST_FLEET,
      otherRoutes: [ROUTES.CREATE_FLEET, ROUTES.UPDATE_FLEET],
      icon: <DirectionsCarFilledIcon />
    }
  ]

  const determineActivePath = (item: INavigation): boolean => {
    if (path === `${item.otherRoutes[1]}/${id}`) return true;
    return [item.path, ...item.otherRoutes].includes(path)
  }

  return (
    <>
      <Card sx={{ p: 2, mb: 2 }}>
        <Grid xs={12} container>
          <Stack direction="row" spacing={1}>
            {navigations.map(item => (
              <Button
                startIcon={item.icon}
                onClick={() => navigate(item.path)}
                key={item.id}
                variant={determineActivePath(item) ? "contained" : "outlined"}
              >
                {item.text}
              </Button>
            ))}
          </Stack>
        </Grid>
      </Card>
      <Outlet />
    </>
  )
}

export default AssetsManagement