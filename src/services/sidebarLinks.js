import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';






const fileManager = [
    {
        name: 'Dashboard',
        icon: <FolderOutlinedIcon fontSize='small' />,
        to: '/',
    },
    {
        name: 'Projects',
        icon: <AccessTimeOutlinedIcon fontSize='small' />,
        to: '/Projects',
    },
    {
        name: 'Your work',
        icon: <GradeOutlinedIcon  fontSize='small' />,
        to: '/yourwork',
    },
   // {
   //     name: 'Trash',
   //     icon: <DeleteOutlinedIcon fontSize='small' />,
   //     to: '/trash',
   // },
];

const sharedFile = [
    {
        name: 'Team',
        icon: <PeopleIcon fontSize='small' />,
        to: '/shared-with-me',
    },
   // {
    //   name: 'Shared by me',
     //  icon: <PersonIcon fontSize='small' />,
     //  to: '/shared-by-me',
  //  },
];

export { fileManager, sharedFile };