import { useState } from 'react'
import { ISideBarItem } from './interface';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../core/routes/routes';
import SideBarElements from './sideBarElements';

const HandleRoutes = () => {
    const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
    const [activeRoute, setActiveRoute] = useState<number | null>(null)
    const navigate = useNavigate();
    const { sideBarList } = SideBarElements();

    const handleClick = (item: ISideBarItem) => {
        if (item?.subroutes?.length > 0) {
            setExpandedItemId(expandedItemId === item.id ? null : item.id);
        } else {
            navigate(item.route);
        }
    };

    const handleActiveRoute = (item: ISideBarItem) => {
        setActiveRoute(item.id)
    }

    const handleRouteChange = (route: string) => {
        if (route === ROUTES.ASSETS_MANAGEMENT) {
            handleClick(sideBarList[0]);
            handleActiveRoute(sideBarList[0])
        }
        if ([ROUTES.LIST_ASSETS].includes(route)) {
            handleClick(sideBarList[1])
            handleActiveRoute(sideBarList[1])
        }
        if (route.indexOf(ROUTES.LIST_ASSETS) !== -1) {
            handleActiveRoute(sideBarList[1])
        }
        if (route === ROUTES.USERS) {
            handleClick(sideBarList[2])
            handleActiveRoute(sideBarList[2])
        }
        if (route === ROUTES.REQUEST) {
            handleClick(sideBarList[3])
            handleActiveRoute(sideBarList[3])
        }
        if (route.indexOf(ROUTES.REQUEST) !== -1) {
            handleActiveRoute(sideBarList[3])
        }
        if (route === ROUTES.TRANSPORT_REQUEST) {
            handleClick(sideBarList[4])
            handleActiveRoute(sideBarList[4])
        }
        if (route === ROUTES.SETTINGS) {
            handleClick(sideBarList[5])
            handleActiveRoute(sideBarList[5])
        }
        if (route === ROUTES.AUDIT_TRAILS) {
            handleClick(sideBarList[6])
            handleActiveRoute(sideBarList[6])
        }
    }

    return (
        {
            handleClick,
            expandedItemId,
            setExpandedItemId,
            activeRoute,
            setActiveRoute,
            handleRouteChange
        }
    )
}

export default HandleRoutes