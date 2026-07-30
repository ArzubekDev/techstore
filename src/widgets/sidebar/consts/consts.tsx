import { ROUTE } from '@/shared/consts/routes';
import {
  BellOutlined,
  PlusOutlined,
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
    label: 'Создать магазин',
    icon: <ShopOutlined />,
    path: ROUTE.profile.createStore,
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
  {
    label: 'Создать продукт',
    icon: <PlusOutlined />,
    path: ROUTE.profile.createProduct,
  },
];
