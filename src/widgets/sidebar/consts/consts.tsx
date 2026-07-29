import { ROUTE } from '@/shared/consts/routes';
import {
  BellOutlined,
  SettingOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const PROFILE_TABS = [
  {
    label: 'Профиль',
    icon: <UserOutlined />,
    path: ROUTE.profile.root,
  },
  {
    label: 'Мой магазин',
    icon: <ShopOutlined />,
    path: ROUTE.profile.myStore,
  },
  {
    label: 'Уведомления',
    icon: <BellOutlined />,
    path: ROUTE.profile.notifications,
  },
  {
    label: 'Настройки',
    icon: <SettingOutlined />,
    path: ROUTE.profile.settings,
  },
];
